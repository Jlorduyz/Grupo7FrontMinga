import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies, updateCompanyActive } from "../Store/actions/companyActions";
import { fetchAuthors, updateAuthorActive } from "../Store/actions/authorActions";
import Footer from "../Components/Footer/Footer";

const AdminPanel = () => {
    const dispatch = useDispatch();

    const { companies, isLoading: isLoadingCompanies, error: errorCompanies } = useSelector((state) => state.company);
    const { authors, isLoading: isLoadingAuthors, error: errorAuthors } = useSelector((state) => state.author);

    const [selectedTab, setSelectedTab] = useState("companies");

    const [updatingCompanyId, setUpdatingCompanyId] = useState(null);
    const [updatingAuthorId, setUpdatingAuthorId] = useState(null);

    useEffect(() => {
        dispatch(fetchCompanies());
        dispatch(fetchAuthors());
    }, [dispatch]);

    const handleToggleCompany = async (companyId, currentActive) => {
        setUpdatingCompanyId(companyId);
        try {
            await dispatch(updateCompanyActive({ companyId, active: currentActive })).unwrap();
            dispatch(fetchCompanies());
        } catch (error) {
            console.error("Error al actualizar la compañía:", error);
        } finally {
            setUpdatingCompanyId(null);
        }
    };

    const handleToggleAuthor = async (authorId, currentActive) => {
        setUpdatingAuthorId(authorId);
        try {
            await dispatch(updateAuthorActive({ authorId, active: currentActive })).unwrap();
            dispatch(fetchAuthors());
        } catch (error) {
            console.error("Error al actualizar el autor:", error);
        } finally {
            setUpdatingAuthorId(null);
        }
    };

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="relative">
                    <img
                        src="/images/panel.jpg"
                        alt="Admin Panel Background"
                        className="w-full h-[300px] sm:h-[400px] lg:h-[644px] object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-6 sm:mb-8">
                            Admin-Panel
                        </h1>
                    </div>
                </div>

                <div className="flex-1 mx-auto mt-[-100px] sm:mt-[-120px] lg:mt-[-150px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 w-full max-w-7xl relative z-10">
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => setSelectedTab("companies")}
                            className={`px-10 py-2  font-semibold  focus:outline-none transition-colors ${selectedTab === "companies"
                                ? "bg-pink-500 text-white"
                                : "bg-gray-200 text-pink-500 hover:bg-pink-400 hover:text-white"
                                }`}
                        >
                            Companies
                        </button>
                        <button
                            onClick={() => setSelectedTab("authors")}
                            className={`px-10 py-2 font-semibold  focus:outline-none transition-colors ${selectedTab === "authors"
                                ? "bg-pink-500 text-white"
                                : "bg-gray-200 text-pink-500 hover:bg-pink-400 hover:text-white"
                                }`}
                        >
                            Authors
                        </button>
                    </div>

                    {selectedTab === "companies" && (
                        <div>
                            {isLoadingCompanies ? (
                                <div className="text-center">Loading companies...</div>
                            ) : errorCompanies ? (
                                <div className="text-center text-red-500">Error: {errorCompanies}</div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    WebSite
                                                </th>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Image
                                                </th>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Active
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {companies.map((company) => (
                                                <tr key={company._id} className="hover:bg-gray-100">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                        {company.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                        <a href={company.webSite} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                            {company.webSite}
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        <img
                                                            src={company.photo}
                                                            alt={company.name}
                                                            className="w-16 h-16 object-cover rounded"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        <label htmlFor={`toggle-company-${company._id}`} className="inline-flex relative items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                id={`toggle-company-${company._id}`}
                                                                className="sr-only peer"
                                                                checked={company.active}
                                                                onChange={() => handleToggleCompany(company._id, company.active)}
                                                                disabled={updatingCompanyId === company._id}
                                                            />
                                                            {updatingCompanyId === company._id ? (
                                                                <div className="w-11 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                                                    <svg className="animate-spin h-5 w-5 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                        <circle
                                                                            className="opacity-25"
                                                                            cx="12"
                                                                            cy="12"
                                                                            r="10"
                                                                            stroke="currentColor"
                                                                            strokeWidth="4"
                                                                        ></circle>
                                                                        <path
                                                                            className="opacity-75"
                                                                            fill="currentColor"
                                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                            ) : (
                                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
                                                            )}
                                                        </label>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {selectedTab === "authors" && (
                        <div>
                            {isLoadingAuthors ? (
                                <div className="text-center">Loadin Authors...</div>
                            ) : errorAuthors ? (
                                <div className="text-center text-red-500">Error: {errorAuthors}</div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Country
                                                </th>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    City
                                                </th>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Image
                                                </th>
                                                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Active
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {authors.map((author) => (
                                                <tr key={author._id} className="hover:bg-gray-100">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                        {author.name} {author.lastName}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                        {author.country}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                        {author.city}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        <img
                                                            src={author.photo}
                                                            alt={`${author.name} ${author.lastName}`}
                                                            className="w-16 h-16 object-cover rounded-full"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        <label htmlFor={`toggle-author-${author._id}`} className="inline-flex relative items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                id={`toggle-author-${author._id}`}
                                                                className="sr-only peer"
                                                                checked={author.active}
                                                                onChange={() => handleToggleAuthor(author._id, author.active)}
                                                                disabled={updatingAuthorId === author._id}
                                                            />
                                                            {updatingAuthorId === author._id ? (
                                                                <div className="w-11 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                                                    <svg className="animate-spin h-5 w-5 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                        <circle
                                                                            className="opacity-25"
                                                                            cx="12"
                                                                            cy="12"
                                                                            r="10"
                                                                            stroke="currentColor"
                                                                            strokeWidth="4"
                                                                        ></circle>
                                                                        <path
                                                                            className="opacity-75"
                                                                            fill="currentColor"
                                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                                        ></path>
                                                                    </svg>
                                                                </div>
                                                            ) : (
                                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
                                                            )}
                                                        </label>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminPanel;
