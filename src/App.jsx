import { Routes, Route } from 'react-router-dom';
// import { HomePage, MoviePage, NotFoundPage } from './pages';
import RootLayout from './layout/RootLayout';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import MovieGenre from './pages/MovieGenre';

const HomePage = lazy(() => import('./pages/Home'));
const MoviePage = lazy(() => import('./pages/Movie'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));

const App = () => {
	return (
		<Routes>
			<Route
				element={
					<Suspense fallback={'Loading...'}>
						<RootLayout />
					</Suspense>
				}
			>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loader />}>
							<HomePage />
						</Suspense>
					}
				/>

				<Route
					path="/movie/:category"
					element={
						<Suspense fallback={<Loader />}>
							<MoviePage />
						</Suspense>
					}
				/>

				<Route
					path="/movie/details/:id"
					element={
						<Suspense fallback={<Loader />}>
							<MovieDetails />
						</Suspense>
					}
				/>

				<Route
					path="/movie/genre/:id"
					element={
						<Suspense fallback={<Loader />}>
							<MovieGenre />
						</Suspense>
					}
				/>
			</Route>
			<Route
				path="/*"
				element={
					<Suspense fallback={<NotFoundPage />}>
						<MoviePage />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default App;
