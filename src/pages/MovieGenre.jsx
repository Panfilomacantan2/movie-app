import React, { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const MovieGenre = () => {
	const apiKey = import.meta.env.VITE_APP_NEW_TMDB_API_KEY;
	const { id } = useParams();
	const [moviesGenre, setMoviesGenres] = useState([]);

	// Make a request to the API to fetch movies by genre
	useEffect(() => {
		const fetchMoviesByGenre = async () => {
			const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&append_to_response=credits`);
			const data = await response.json();
			setMoviesGenres(data.results);
			console.log(data.results);
		};
		fetchMoviesByGenre();

		return () => {

			setMoviesGenres([]);
		}

	}, []);

	return (
		<div className="px-3 py-10 gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 relative">
			{moviesGenre &&
				moviesGenre.map((movie) => (
					<Link to={`/movie/details/${movie.id}`} key={movie.id}>
						<div className="w-full">
							<MovieCard {...movie} />
						</div>
					</Link>
				))}
		</div>
	);
};

export default MovieGenre;
