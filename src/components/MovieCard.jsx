import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdDownloading } from 'react-icons/md';
import Loader from './Loader';
import { BlurhashCanvas } from 'react-blurhash';

const MovieCard = (movie) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	// check if the image loaded successfully
	const loadImage = () => {
		setImageLoaded(true);

		return () => {
			setImageLoaded(false);
		};
	};

	return (
		<div className="w-full bg-slate-900 text-white relative rounded-md overflow-hidden h-[305px]">
			{!imageLoaded && (
				<div className="absolute top-0 left-0 flex items-center justify-center bg-slate-800 text-white w-full h-60 flex-col">
					<MdDownloading />
					Loading...
				</div>
			)}
			<div className="h-60 relative overflow-hidden">
				<img
					onLoad={loadImage}
					src={movie.poster_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${movie.poster_path}`}
					alt=""
					className="object-cover object-center"
					loading="lazy"
				/>
			</div>

			<div className="px-3 h-12">
				<h6 className="font-bold text-xs  truncate mt-2">{movie.title || movie.original_name}</h6>
				<div className="flex justify-between items-center py-2">
					<div className=' gap-x-1 flex items-center'>
						<span className="text-xs inline-block border border-gray-600 px-1">{movie.media_type === 'tv' ? 'TV' : 'Movie'}</span>
						<span className="text-xs inline-block">{new Date(movie.release_date).getFullYear() || new Date(movie.first_air_date).getFullYear()}</span>
					</div>

					<div>
						<span>
							<AiFillStar className="inline-block text-yellow-500" />
						</span>
						<span className="text-xs"> {movie.vote_average.toFixed(1)}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
