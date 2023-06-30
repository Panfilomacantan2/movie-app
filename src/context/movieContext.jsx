import React, { useContext, createContext, useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
	const requestsMovies = {
		fetchTrending: `/trending/all/week?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`,
		fetchNetflixOriginals: `/discover/tv?api_key=${import.meta.VITE_APP_API_KEY}&with_network=123`,
		fetchTopRated: `/movie/top_rated?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`,
		fetchActionMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=28`,
		fetchComedyMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=35`,
		fetchHorrorMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=27`,
		fetchRomanceMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=10749`,
		fetchDocumentaries: `/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=99`,
	};

	const { fetchTrending, fetchNetflixOriginals, fetchTopRated, fetchActionMovies, fetchComedyMovies, fetchHorrorMovies, fetchRomanceMovies, fetchDocumentaries } = requestsMovies;

	const [movieData, setMovieData] = useState([]);
	const [movieCategory, setMovieCategory] = useState(`/trending/all/week?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`);

	const { data, loading } = useFetch(`${import.meta.env.VITE_APP_BASE_URL}${movieCategory}`);

	useEffect(() => {
		if (data) {
			setMovieData(data.results);
		}

		return () => {
			setMovieData([]);
		};
	}, [data, movieCategory]);

	const value = {
		movieData,
		loading,
		setMovieCategory,
	};

	return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
const useMovie = () => {
	const context = useContext(MovieContext);

	if (!context) {
		throw new Error('useMovie must be used within a Movie Provider');
	}

	return context;
};

export { MovieProvider, useMovie };
