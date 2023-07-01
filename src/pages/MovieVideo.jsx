import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieVideo = () => {
    const { id } = useParams();
	const [videoKey, setVideoKey] = useState('');

	useEffect(() => {
		// Function to fetch movie videos
		const fetchMovieVideos = async () => {
			try {
				// Make API request to fetch movie videos
				const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_APP_NEW_TMDB_API_KEY}`);
				const videosData = response.data.results;
				// Filter for a specific video type (e.g., 'Trailer')
				const trailerVideo = videosData.find((video) => video.type === 'Trailer');
				if (trailerVideo) {
					setVideoKey(trailerVideo.key);
				}
			} catch (error) {
				console.error('Error fetching movie videos:', error);
			}
		};

		// Call the function to fetch movie videos
		fetchMovieVideos();
	}, [movieId]);

	return <div>{videoKey && <iframe title="Movie Trailer" width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} frameBorder="0" allowFullScreen></iframe>}</div>;
};

export default MovieVideo;
