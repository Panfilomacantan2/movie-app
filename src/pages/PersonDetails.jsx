import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
	const { id } = useParams();
	const [personDetails, setPersonDetails] = useState([]);

	useEffect(() => {
		const fetchPersonDetails = () => {
			fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_APP_NEW_TMDB_API_KEY}&append_to_response=known_for`)
				.then((response) => response.json())
				.then((response) => {
					// console.log(response);
					setPersonDetails(response);
				})
				.catch((err) => console.error(err));
		};
		fetchPersonDetails();
	}, []);
	return (
		<div className="h-screen relative overflow-hidden">
			<div className="person_grid px-10  h-screen gap-10  z-3 ">
				<div className="relative items-center flex justify-center overflow-hidden rounded-lg w-full ">
					<img
						src={`https://image.tmdb.org/t/p/original/` + personDetails?.profile_path}
						alt={personDetails.title || personDetails.original_name}
						className="object-cover object-center"
						loading="lazy"
					/>
				</div>

				<div>
					<h1 className="text-4xl font-bold">{personDetails.name}</h1>
					<p className="text-gray-400 text-sm">{personDetails.known_for_department}</p>
					<p className="text-gray-400 text-sm">{personDetails.birthday}</p>
					<p className="text-gray-400 text-sm">{personDetails.place_of_birth}</p>
					<h1 className="text-lg font-semibold">Biography</h1>
					<p className="text-gray-400 text-sm">{personDetails.biography}</p>

					<div>
						<h1 className="text-lg font-semibold">Known For</h1>
						<div className="flex gap-5">
							{personDetails?.known_for?.map((movie) => (
								<div className="flex flex-col gap-2">
									<img src={personDetails.profile_path} />
									<h1 className="text-sm font-semibold">{movie.title}</h1>
									<p className="text-xs">{movie.release_date}</p>
									<a href={'http://www.imdb.com/title/' + movie.imdb_id} target="_blank" rel="noreferrer">
										<img src="/imdb.svg" alt="imdb" className="w-5" />
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonDetails;
