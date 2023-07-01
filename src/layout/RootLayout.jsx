import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const RootLayout = () => {
	const [show, setShow] = useState(false);
	const matches = useMediaQuery('only screen and (min-width: 1024px)');
	

	useEffect(() => {
		if (matches) {
			setShow(true);
		}else{
			setShow(false);
		}
	}, [matches]);

	return (
		<section className="min-h-screen flex pt-16 ">
			<div className={`fixed top-0 ${show ? 'left-0' : 'left-[-300px]'} transition-all duration-500 h-screen z-10 w-[260px] lg:relative bg-slate-800`}>
				<SideNav show={show} setShow={setShow} />
			</div>
			<div className="flex-1">
				<Outlet />
			</div>
		</section>
	);
};

export default RootLayout;
