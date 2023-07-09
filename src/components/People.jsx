import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ currentItems }) => {
	return (
		<>
			{currentItems.map((person) => (
				<Link to={'/person/' + person.id} key={person.id}>
					<div className="overflow-hidden border border-gray-200 shadow-md ">
						<img
							src={person.profile_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${person.profile_path}`}
							alt={person.name}
							className="w-full object-cover object-center"
							loading="lazy"
						/>

						{/* <div className="image-gradient"></div> */}

						<div className=" flex flex-col px-3 py-2 ">
							<h1 className="text-slate-900 text-lg font-semibold">{person.name}</h1>
							<p className="text-gray-400 text-sm">{person.known_for_department}</p>
						</div>
					</div>
				</Link>
			))}
		</>
	);
};

export default Items;
