import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMovie } from '../context/movieContext';

import { netflixLogo, netflixTextLogo } from '../assets';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const SideNav = ({ show, setShow}) => {
	const [activeItem, setActiveItem] = useState('home');
	const { setMovieCategory } = useMovie();

	const sidebarItems = [
		{ id: 'home', label: 'Home', path: '/' },
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
			case 'home':
				setMovieCategory(`/trending/all/week?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`);
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
		<ul className="text-white text-left text-lg  cursor-pointer">
			<li className="bg-slate-800 fixed top-0 left-0 w-full md:w-auto flex items-center justify-between md:justify-center md:relative px-5 py-2">
				<Link to="/">
					<img src={netflixTextLogo} alt="netflix logo" className="w-32 block mx-auto" />
				</Link>

				<span className="md:hidden">{show ? <AiOutlineClose className="text-2xl" onClick={() => setShow(!show)} /> : <RxHamburgerMenu className="text-2xl" onClick={() => setShow(!show)} />}</span>
			</li>

			<div className={` mt-28 md:mt-10 `}>
				{sidebarItems.map((item, idx) => (
					<Link to={item.path} key={item.id}>
						<li className={activeItem === item.id ? 'bg-gray-700 hover:bg-gray-700 px-5 py-2' : 'text-gray-300 bg-slate-800 hover:bg-gray-700 px-5 py-2'} onClick={() => handleItemClick(item.id)}>
							{item.label}
						</li>
					</Link>
				))}
			</div>
		</ul>
	);
};

export default SideNav;
