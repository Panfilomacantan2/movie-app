import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { MovieProvider } from './context/movieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MovieProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MovieProvider>
	</React.StrictMode>,
);
