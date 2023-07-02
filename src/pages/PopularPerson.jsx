import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PaginatedItems from '../components/PaginatedItems';
import Items from '../components/Items';

const PopularPerson = () => {
	const [popularPersons, setPopularPersons] = useState([]);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);

	console.log(queryParams);
	let page = 2;
	let itemsPerPage = 20;

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
		<div className="px-2 md:px-10">
			<h1 className="py-5 text-2xl font-medium">Popular People</h1>

			<div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-10 relative">{popularPersons && <Items currentItems={popularPersons} />}</div>
			<PaginatedItems itemsPerPage={itemsPerPage} />
		</div>
	);
};

export default PopularPerson;
