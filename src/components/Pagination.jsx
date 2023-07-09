import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPages, setCurrentPage }) => {
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

	// next button
	// previous button label
	// next button label

	

	return (
		<ReactPaginate
			previousLabel={'Previous'}
			nextLabel={'Next'}
			pageCount={pageCount}
			onPageChange={changePage}
			containerClassName={'pagination'}
			previousLinkClassName={'page-num'}
			nextLinkClassName={'page-num'}
			disabledClassName={'paginationDisabled'}
			activeClassName={'pagination-active'}
		/>
	);
};

export default Pagination;
