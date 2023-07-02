import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineUnorderedList, AiFillHeart, AiFillStar } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';

const MovieDetails = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);

	const icons = [
		{
			icon: <AiOutlineUnorderedList />,
			title: 'Add to List',
		},
		{
			icon: <AiFillHeart />,
			title: 'Mark as favorite',
		},
		{
			icon: <BsFillBookmarkFill />,
			title: 'Add to your watchlist',
		},
		{
			icon: <AiFillStar />,
			title: 'Rate It!',
		},
	];

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

		return () => {
			setMovieDetails([]);
		};
	}, []);

	return (
		<>
			<div className="flex h-5/6 gap-10 pt-20 px-10">
				<div className="w-[600px] relative overflow-hidden rounded-md">
					<img
						src={`https://image.tmdb.org/t/p/original/` + movieDetails?.poster_path}
						alt={movieDetails.title || movieDetails.original_name}
						className="object-cover object-center absolute"
						loading="lazy"
					/>
				</div>
				<div>
					<h1 className="text-2xl font-medium">
						{movieDetails.title}
						<span>({new Date(movieDetails.release_date).getFullYear()})</span>
					</h1>
					<div>
						<span>{movieDetails?.release_date?.replace(/-/g, '/')}</span>
						<span className="inline-block font-bold text-2xl px-2 text-slate-900">.</span>

						{movieDetails.genres &&
							movieDetails.genres.map((genre) => (
								<Link to={`/movie/genre/` + genre.id} key={genre.id}>
									<span className="text-gray-700 border px-2 mx-1 inline-block rounded-sm">{genre.name}</span>
								</Link>
							))}

						<span className="inline-block font-bold text-2xl px-2 text-slate-900">.</span>

						<span>{movieDetails.runtime}m</span>
					</div>

					{/* Icons  */}
					<ul>
						{icons.map(({ icon, title }) => (
							<li key={title}>{icon}</li>
						))}
					</ul>

					<div>
						<p className="text-gray-700">{movieDetails.overview}</p>
						<p>votes: {movieDetails.vote_count}</p>
						<p>ratings: {movieDetails.vote_average}</p>
					</div>
				</div>
				<p>Production:</p>
				{movieDetails.production_companies && movieDetails.production_companies.map((production) => <p key={production.name}>{production.name}</p>)}
				Countries: {movieDetails.production_countries && movieDetails.production_countries.map((production) => <p key={production.name}>{production.name}</p>)}
			</div>

			<div>
				<h1>Top Billed Cast</h1>
				<div className="flex items-center justify-center gap-x-5 w-[992px] overflow-x-scroll ">
					{movieDetails.credits?.cast &&
						movieDetails.credits?.cast.map((cast) => (
							<div className="flex flex-col shadow-gray-300 shadow-md" key={cast.id}>
								<div className="border relative overflow-hidden rounded-md w-40   h-60">
									<img className="block absolute object-cover object-center" src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`} alt={cast.name} />
								</div>
								<div>
									<p className=" text-lg font-medium">{cast.name || cast.original_name}</p>
									<p>{cast.character}</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
