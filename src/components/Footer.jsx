import React from 'react';
import { tmdbLogo } from '../assets';

const Footer = () => {
	return (
		<footer className="grid grid-cols-2 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 px-3 md:px-10 py-20 bg-slate-800 text-gray-200 items-center  md:place-items-center">
			<div className="flex gap-10 flex-col">
				<img src={tmdbLogo} className="block h-32 w-32" />
				<p className=" text-sky-500 bg-gray-100 px-5 py-2 font-medium text-lg">Hi panfilo27!</p>
			</div>
			<div>
				<h1 className="font-bold text-xl uppercase"> The Basics</h1>
				<p className="text-hovered">About TMBD</p>
				<p className="text-hovered">Contact Us</p>
				<p className="text-hovered">Support Forums</p>
				<p className="text-hovered">API</p>
				<p className="text-hovered">System Status</p>
			</div>
			<div>
				<h1 className="font-bold text-xl uppercase">Get involved</h1>
				<p className="text-hovered">Contribution Bible</p>
				<p className="text-hovered">Add New Movie</p>
				<p className="text-hovered">Support Forums</p>
				<p className="text-hovered">Add New TV Show</p>
			</div>
			<div>
				<h1 className="font-bold text-xl uppercase">community</h1>
				<p className="text-hovered">Guidelines</p>
				<p className="text-hovered">Discussions</p>
				<p className="text-hovered">Leaderboard</p>
				<p className="text-hovered">Twitter</p>
			</div>
			<div>
				<h1 className="font-bold text-xl uppercase">legal</h1>
				<p className="text-hovered">Terms of Use</p>
				<p className="text-hovered">API Terms of Use</p>
				<p className="text-hovered">Support Forums</p>
				<p className="text-hovered">Privacy Policy</p>
				<p className="text-hovered">Jerome Larua</p>
			</div>
		</footer>
	);
};

export default Footer;
