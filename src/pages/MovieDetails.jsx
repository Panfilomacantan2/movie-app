import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineUnorderedList, AiFillHeart, AiFillStar } from 'react-icons/ai';
import { MdOutlineBookmark } from 'react-icons/md';

import { emptyImage } from '../assets';

import tippy from 'tippy.js';
import { Tooltip } from 'react-tippy';

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
			icon: <MdOutlineBookmark />,
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

	const bgCover =
		{
			backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		} || null;
	tippy('[data-tippy-content]');

	return (
		<>
			<div className="h-screen relative overflow-hidden" style={bgCover}>
				{/* <div className="opacity-50 bg-slate-600 h-screen w-full absolute top-0 left-0 z-1"></div> */}
				<div className="px-10 flex  bg-slate-800 opacity-90  h-screen gap-10  z-3 items-center justify-center">
					<div className="w-[600px] h-[700px] relative items-center flex justify-center overflow-hidden rounded-md">
						<img
							src={`https://image.tmdb.org/t/p/original/` + movieDetails?.poster_path}
							alt={movieDetails.title || movieDetails.original_name}
							className="object-cover object-center absolute"
							loading="lazy"
						/>
					</div>
					<div>
						<h1 className="text-4xl font-bold text-white">
							{movieDetails.title}
							<span className="text-gray-300 font-normal ml-2">({new Date(movieDetails.release_date).getFullYear()})</span>
						</h1>
						<div className="text-white">
							<span>{movieDetails?.release_date?.replace(/-/g, '/')}</span>
							<span className="inline-block font-bold text-2xl px-2 ">.</span>

							{movieDetails.genres &&
								movieDetails.genres.map((genre) => (
									<Link to={`/movie/genre/` + genre.id} key={genre.id}>
										<span className=" border border-gray-600 px-2 mx-1 inline-block rounded-sm">{genre.name}</span>
									</Link>
								))}

							<span className="inline-block font-bold text-2xl px-2">.</span>

							<span>{movieDetails.runtime}m</span>
						</div>

						{/* Icons  */}
						<ul className="flex gap-x-5 pt-5">
							{icons.map(({ icon, title }) => (
								<li className="text-white bg-slate-950 rounded-full w-10 h-10 flex items-center justify-center" key={title}>
									<Tooltip title={title} position="top" trigger="mouseenter" animation="scale" className="flex justify-center items-center">
										<span className="block text-xl cursor-pointer">{icon}</span>
									</Tooltip>
								</li>
							))}
						</ul>

						<div className="text-white">
							<p className="text-xl py-5 italic text-gray-300">{movieDetails.tagline}</p>
							<p className="text-lg">{movieDetails.overview}</p>
							<p>votes: {movieDetails.vote_count}</p>
							<p>ratings: {movieDetails.vote_average}</p>
						</div>
					</div>
					{/* <p>Production:</p>
				{movieDetails.production_companies && movieDetails.production_companies.map((production) => <p key={production.name}>{production.name}</p>)}
				Countries: {movieDetails.production_countries && movieDetails.production_countries.map((production) => <p key={production.name}>{production.name}</p>)} */}
				</div>
			</div>

			<div className="px-10 mb-10 py-10">
				<h1 className="py-5 text-2xl font-medium">Top Billed Cast</h1>
				<div className="flex items-start justify-start gap-x-5 w-full overflow-x-auto ">
					{movieDetails.credits?.cast &&
						movieDetails.credits?.cast.map((cast) => (
							<div className="flex flex-col shadow-gray-300 shadow-md" key={cast.id}>
								<div className="border relative overflow-hidden w-44 h-52 ">
									<img
										className="block absolute object-cover object-center"
										src={cast?.profile_path === null ? emptyImage : `https://image.tmdb.org/t/p/original/${cast?.profile_path}`}
										alt={cast.name}
									/>
								</div>
								<div className="px-2 py-3 h-24">
									<p className=" text-md font-medium">{cast.name || cast.original_name}</p>
									<p className=" text-sm">{cast.character}</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
