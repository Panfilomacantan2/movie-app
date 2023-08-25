import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../assets/react.svg';

const Test = () => {
	return (
		<>
			<div className=" min-h-screen bg-slate-900">
				<Header />

				<p className=" text-white text-4xl text-center pt-20">ReactJS</p>

				<div className=" h-20 w-20 rounded-full ">
					<img src={Logo} className="w-32" />
				</div>

				<p className="text-white  text-lg m-5 text-center">This is paragraph</p>
				<Footer />
			</div>
		</>
	);
};

export default Test;
