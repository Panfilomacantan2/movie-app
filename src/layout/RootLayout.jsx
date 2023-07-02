import { Outlet, Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { netflixLogo, netflixTextLogo } from '../assets';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const RootLayout = () => {
	const [show, setShow] = useState(false);
	const matches = useMediaQuery('only screen and (min-width: 1024px)');

	useEffect(() => {
		if (matches) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, [matches]);

	return (
		<section className="h-screen">
			<nav>
				<div className="bg-slate-800 gap-x-10 flex items-center px-5 py-2">
					<Link to="/">
						<img src={netflixTextLogo} alt="netflix logo" className="w-32 block mx-auto" />
					</Link>

					<SideNav show={show} setShow={setShow} />
				</div>
			</nav>

			<Outlet />
		</section>
	);
};

export default RootLayout;
