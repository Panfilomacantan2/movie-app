import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { useMovie } from '../context/movieContext';
import MovieCard from '../components/MovieCard';

const Home = () => {
	const { loading, movieData } = useMovie();

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (movieData) {
			setMovies(movieData);
		}

		return () => {
			setMovies([]);
		};
	}, [movieData]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="px-3 gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-5 max-h-screen overflow-auto relative">
			{movies &&
				movies.map((movie) => (
					<Link to={`/movie/${movie.id}`} key={movie.id}>
						<MovieCard {...movie} />
					</Link>
				))}
		</div>
	);
};

export default Home;
