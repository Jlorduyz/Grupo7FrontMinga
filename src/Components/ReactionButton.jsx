import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavourites } from "../Store/actions/favouritesActions";
const ReactionButton = ({ reaction, mangaId, userId }) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favourites.favourites);
    let userfavorites = favorites.filter(favourite => favourite?.userId === userId && favourite?.manga_id?._id === mangaId);
    console.log("userfavorites", userfavorites);
    
    
    

    useEffect(() => {
        dispatch(fetchFavourites());
        console.log(active);

    }, [active])
    console.log("favorites", favorites);


    const handleClick = async () => {
        try {
            if (userfavorites?.length === 0) {
                // Crear reacción
                // console.log("userId", userId);
                // console.log("mangaId", mangaId);
                // console.log("reaction", reaction);
                await axios.post("http://localhost:8080/api/reactions/create", {
                    manga_id: mangaId,
                    reaction: reaction,
                    userId: userId,
                });

            } if (userfavorites?.length > 0) {
                // Eliminar o actualizar reacción
                const { data } = await axios.get(`http://localhost:8080/api/reactions/user/${userId}`);
                // console.log(userId);

                // console.log("data", data);

                const userReaction = data.response.find(r => r.manga_id === mangaId && r.reaction === reaction);
                if (userReaction) {
                    await axios.delete(`http://localhost:8080/api/reactions/delete/${userReaction._id}`);
                }
            }
            setActive(!active);
        } catch (error) {
            console.error("Error handling reaction:", error);
        }
    };

    return (
        <button
            className={`emoji-button ${active ? "active" : ""}`}
            onClick={handleClick}
        >
            {reaction}
        </button>
    );
};

export default ReactionButton;
