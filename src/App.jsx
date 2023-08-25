import { Routes, Route } from 'react-router-dom';
// import { HomePage, MoviePage, NotFoundPage } from './pages';
import RootLayout from './layout/RootLayout';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import 'react-tippy/dist/tippy.css';

// Pages
const HomePage = lazy(() => import('./pages/Home'));
const MoviePage = lazy(() => import('./pages/Movie'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const PopularPerson = lazy(() => import('./pages/PopularPerson'));
const MovieGenre = lazy(() => import('./pages/MovieGenre'));
const PersonDetails = lazy(() => import('./pages/PersonDetails'));
import Test from './pages/Test';
const App = () => {
	return (
		<Routes>
			<Route path="/test" element={<Test />} />
			<Route
				element={
					<Suspense fallback={'Loading...'}>
						<RootLayout />
					</Suspense>
				}
			>
				<Route
					path="/person"
					element={
						<Suspense fallback={<Loader />}>
							<PopularPerson />
						</Suspense>
					}
				/>

				<Route
					path="/"
					index
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

				<Route
					path="/person/:id"
					element={
						<Suspense fallback={<Loader />}>
							<PersonDetails />
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
