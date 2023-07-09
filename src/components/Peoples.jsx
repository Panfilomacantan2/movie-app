import React, { useState } from 'react';
import People from './People';

const Peoples = ({ data, totalPages, setCurrentPage }) => {
	const pageCount = totalPages;

	const changePage = ({ selected }) => {
		// Update the URL with the new page query parameter
		const url = new URL(window.location.href);
		url.searchParams.set('page', selected + 1);

		// Replace the current URL with the updated one
		window.history.replaceState({}, '', url.toString());

		setCurrentPage(selected + 1);

		console.log(selected);
	};

	return (
		<div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-10 relative">
			<People currentItems={data} />
		</div>
	);
};

export default Peoples;
