import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Header from '../components/Header';
import { useState } from 'react';

const RootLayout = () => {
	const [show, setShow] = useState(true);

	return (
		<section className="min-h-screen flex gap-4 pt-16 md:pt-0">
			<div className={`fixed top-0 ${show ? 'left-0' : 'left-[-300px]'} transition-all duration-500 h-screen z-10 w-[260px] lg:relative md:w-[260px] bg-slate-800`}>
				<SideNav show={show} setShow={setShow} />
			</div>
			<div className="flex-1">
				<Outlet />
			</div>
		</section>
	);
};

export default RootLayout;