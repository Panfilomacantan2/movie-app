import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);

	useEffect(() => {
		const fetchMovieDetails = () => {
			fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_APP_NEW_TMDB_API_KEY}&append_to_response=credits`)
				.then((res) => res.json())
				.then((data) => {
					setMovieDetails(data);
					console.log(data);
				});
		};

		fetchMovieDetails();
	}, []);

	return (
		<>
			<div className="h-40 w-40 relative overflow-hidden">
				<img
					src={movieDetails.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
					alt=""
					className="object-cover object-center"
					loading="lazy"
				/>
			</div>
			<h1 className="text-2xl">{movieDetails.title}</h1>
			<p className="text-gray-700">{movieDetails.overview}</p>
			<div>
				<p>votes: {movieDetails.vote_count}</p>
				<p>ratings: {movieDetails.vote_average}</p>
			</div>
			<p>Duration: {movieDetails.runtime}m</p>
			Genres:{' '}
			{movieDetails.genres &&
				movieDetails.genres.map((genre) => (
					<Link to={`/movie/genre/` + genre.id} key={genre.id}>
						{genre.name}
					</Link>
				))}
			Production: {movieDetails.production_companies && movieDetails.production_companies.map((production) => <p key={production.name}>{production.name}</p>)}
			Countries: {movieDetails.production_countries && movieDetails.production_countries.map((production) => <p key={production.name}>{production.name}</p>)}
			Cast:
			{movieDetails.credits?.cast &&
				movieDetails.credits?.cast.map((cast, index) => (
					<div key={cast.id}>
						{index} <img className="h-16 w-16 object-cover object-center rounded-full" src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="" />
						<p>{cast.name || cast.original_name}</p>
						<p>{cast.character}</p>
					</div>
				))}
		</>
	);
};

export default MovieDetails;
