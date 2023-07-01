import { useState, useEffect, Suspense } from 'react';
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

		const searchQuery = "Spiderman".split(" ").join('+')

		fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${import.meta.env.VITE_APP_NEW_TMDB_API_KEY}`)
			.then((res) => res.json())
			.then((data) => console.log(data));


		

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
					<Link to={`/movie/details/${movie.id}`} key={movie.id}>
						<div className="w-full">
							<MovieCard {...movie} />
						</div>
					</Link>
				))}
		</div>
	);
};

export default Home;
