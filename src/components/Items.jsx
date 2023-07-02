import React from 'react';

const Items = ({ currentItems }) => {
	return (
		<>
			{currentItems &&
				currentItems.map((person) => (
					<div className="w-full" key={person.id}>
						<div className="relative">
							<img
								src={person.profile_path === null ? 'https://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/original${person.profile_path}`}
								alt={person.name}
								className="object-cover object-center rounded-md"
								loading="lazy"
							/>
							<div className="image-gradient"></div>

							<div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end px-3 py-2">
								<h1 className="text-white text-lg font-semibold">{person.name}</h1>
								<p className="text-gray-400 text-sm">{person.known_for_department}</p>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default Items;
