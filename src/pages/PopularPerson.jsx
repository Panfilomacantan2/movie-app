import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Peoples from '../components/Peoples';
import Pagination from '../components/Pagination';

const PopularPerson = () => {
	const [popularPersons, setPopularPersons] = useState([]);
	const location = useLocation();
	let [currentPage, setCurrentPage] = useState(new URLSearchParams(location.search));

	console.log(currentPage);

	const totalPages = 500;

	// !Data to paginate
	// total_pages = 500
	// total_results = 10000

	useEffect(() => {
		const fetchPopularPerson = () => {
			fetch(`https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_APP_NEW_TMDB_API_KEY}&sort_by=popularity.desc&page=${currentPage}`)
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					setPopularPersons(response.results);
				})
				.catch((err) => console.error(err));
		};
		fetchPopularPerson();

		return () => {
			setPopularPersons([]);
		};
	}, [currentPage]);

	return (
		<div className="px-2 md:px-10">
			<h1 className="py-5 text-2xl font-medium">Popular People</h1>

			<Peoples data={popularPersons} />
			{/* Pagination */}
			<div className="py-5">
				<Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
			</div>
		</div>
	);
};

export default PopularPerson;
