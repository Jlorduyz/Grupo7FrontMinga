// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UpdateAuthorForm = ({ authorId }) => {
//   const [author, setAuthor] = useState({
//     nombre: '',
//     // Agrega otros campos necesarios
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Obtener el token de localStorage
//   const token = localStorage.getItem('token'); // Asegúrate de que la clave sea la correcta
//   console.log("token", token);
  

//   useEffect(() => {
//     // Función para obtener los datos del autor
//     const fetchAuthor = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/authors/user/${authorId}/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log("response", response);
        
//         setAuthor(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError('Error al obtener los datos del autor.');
//         setLoading(false);
//       }
//     };

//     fetchAuthor();
//   }, [authorId, token]);

//   const handleChange = (e) => {
//     setAuthor({
//       ...author,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8080/api/authors/user/${authorId}/`, author, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       alert('Datos actualizados exitosamente.');
//       // Puedes actualizar el estado o redirigir al usuario según sea necesario
//     } catch (err) {
//       console.error(err);
//       setError('Error al actualizar los datos del autor.');
//     }
//   };
  
//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Nombre:</label>
//         <input
//           type="text"
//           name="nombre"
//           value={author.nombre}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       {/* Agrega más campos según sea necesario */}
//       <button type="submit">Actualizar</button>
//     </form>
//   );
// };

// export default UpdateAuthorForm;
