import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMovie } from '../context/movieContext';

const SideNav = ({ show, setShow }) => {
	const [activeItem, setActiveItem] = useState('trending');
	const { setMovieCategory } = useMovie();

	const sidebarItems = [
		{ id: 'trending', label: 'Trending', path: '/' },
		{ id: 'netflix_original', label: 'Netflix Original', path: '/movie/netflix_original' },
		{ id: 'top_rated', label: 'Top Rated', path: '/movie/top_rated' },
		{ id: 'action_movies', label: 'Action Movies', path: '/movie/action_movies' },
		{ id: 'comedy', label: 'Comedy', path: '/movie/comedy' },
		{ id: 'horror', label: 'Horror', path: '/movie/horror' },
		{ id: 'romance', label: 'Romance', path: '/movie/romance' },
		{ id: 'documentaries', label: 'Documentaries', path: '/movie/documentaries' },
	];
	const handleItemClick = (itemId) => {
		setActiveItem(itemId);

		switch (itemId) {
			case 'trending':
				setMovieCategory(`/trending/all/week?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`);
				setMovieCategory(`https://api.themoviedb.org/3/trending/all/day?language=en-US`);
				break;
			case 'netflix_original':
				setMovieCategory(`/discover/tv?api_key=${import.meta.env.VITE_APP_API_KEY}&with_network=123`);
				break;
			case 'top_rated':
				setMovieCategory(`/movie/top_rated?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`);
				break;
			case 'action_movies':
				setMovieCategory(`/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=28`);
				break;
			case 'comedy':
				setMovieCategory(`/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=35`);
				break;
			case 'horror':
				setMovieCategory(`/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=27`);
				break;
			case 'romance':
				setMovieCategory(`/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=10749`);
				break;
			case 'documentaries':
				setMovieCategory(`/discover/movie?api_key=${import.meta.env.VITE_APP_API_KEY}&with_genres=99`);
				break;
			default:
				setMovieCategory(`/trending/all/week?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`);
				break;
		}
	};

	return (
		<ul className="flex text-white text-left text-lg  cursor-pointer gap-x-4">
			<li>Movies</li>
			<li>TV shows</li>
			<li>
				<Link to='/person?page=1'>People</Link>
			</li>
			<li className="relative z-10 group">
				<span>Categories</span>
				<div className="hidden  group-hover:flex  flex-col absolute bg-white  py-3 rounded-md shadow-lg">
					{sidebarItems.map((item, idx) => (
						<Link to={item.path} key={item.id}>
							<span className="w-full inline-flex px-8 mt-1 rounded-md text-gray-900  hover:bg-gray-100" onClick={() => handleItemClick(item.id)}>
								{item.label}
							</span>
						</Link>
					))}
				</div>
			</li>
			<li>More</li>
		</ul>
	);
};

export default SideNav;
