import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PopularPerson = () => {
	const [popularPersons, setPopularPersons] = useState([]);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	console.log(queryParams);
	let page = 1;

	useEffect(() => {
		const fetchPopularPerson = () => {
			fetch(`https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_APP_NEW_TMDB_API_KEY}&sort_by=popularity.desc&page=${page}`)
				.then((response) => response.json())
				.then((response) => {
					console.log(response.results);
					setPopularPersons(response.results);
				})
				.catch((err) => console.error(err));
		};

		fetchPopularPerson();

		return () => {
			setPopularPersons([]);
		};
	}, []);

	return (
		<div className="px-2 md:px-10 h-auto">
			<h1 className="py-5 text-2xl font-medium">Popular People</h1>

			<div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5 max-h-screen relative">
				{popularPersons &&
					popularPersons.map((person) => (
						<div className="w-full" key={person.id}>
							<div className="relative">
								<img
									src={person.profile_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${person.profile_path}`}
									alt={person.name}
									className="object-cover object-center rounded-md"
									loading="lazy"
								/>
								<div className="image-gradient"></div>

								<div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end px-3 py-2">
									<h1 className="text-white text-lg font-semibold">{person.name}</h1>
									<p className="text-gray-400 text-sm">{person.known_for_department}</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default PopularPerson;
