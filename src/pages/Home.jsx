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
		<section>
			{/* hero section */}
			<div className="relative max-h-96 flex items-center justify-center">
				<div className="absolute inset-0 h-full w-full bg-slate-700 z-2"></div >
				<div className="relative z-3 ">
					<div className="flex flex-col items-center justify-center h-screen">
						<h1 className="text-4xl font-bold text-center text-white">Unlimited movies, TV shows, and more.</h1>
						<h2 className="text-xl text-center text-white">Watch anywhere. Cancel anytime.</h2>
						<p className="text-center text-white mt-5">Ready to watch? Enter your email to create or restart your membership.</p>
						<div className="flex justify-center items-center mt-5">
							<input type="text" placeholder="Email address" className="bg-white px-5 py-3 rounded-l-md focus:outline-none" />
							<button className="bg-red-600 px-5 py-3 rounded-r-md text-white font-semibold">Get Started</button>
						</div>
					</div>
				</div>
			</div>

			{/* list of movies */}
			<div className='px-10 py-5'>
				<h1 className="text-2xl font-medium">Trending</h1>
				<div className="gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-10 relative">
					{movies &&
						movies.map((movie) => (
							<Link to={`/movie/${movie.id}`} key={movie.id}>
								<MovieCard {...movie} />
							</Link>
						))}
				</div>
			</div>
		</section>
	);
};

export default Home;
