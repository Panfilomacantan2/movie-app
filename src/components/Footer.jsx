import React from 'react';

const Footer = () => {
	return (
		<footer className="grid grid-cols-2 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 px-3 md:px-10 py-20 bg-slate-800 text-gray-200 items-center  md:place-items-center">
			<div>
				<h1 className="font-bold text-xl uppercase"> The Basics</h1>
				<p>About TMBD</p>
				<p>Contact Us</p>
				<p>Support Forums</p>
				<p>API</p>
				<p>System Status</p>
			</div>
			<div>
				<h1 className="font-bold text-xl uppercase">Get involved</h1>
				<p>Contribution Bible</p>
				<p>Add New Movie</p>
				<p>Support Forums</p>
				<p>Add New TV Show</p>
			</div>
			<div>
				<h1 className="font-bold text-xl uppercase">community</h1>
				<p>Guidelines</p>
				<p>Discussions</p>
				<p>Leaderboard</p>
				<p>Twitter</p>
			</div>
			<div>
				<h1 className="font-bold text-xl uppercase">legal</h1>
				<p>Terms of Use</p>
				<p>API Terms of Use</p>
				<p>Support Forums</p>
				<p>Privacy Policy</p>
			</div>
		</footer>
	);
};

export default Footer;
