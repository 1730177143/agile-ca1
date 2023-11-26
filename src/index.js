import React, {lazy, Suspense} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviesContextProvider from "./contexts/moviesContext";
import SiteHeader from './components/siteHeader';
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const UpcomingMoviePage = lazy(() => import("./pages/upcomingMoviePage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const PlaylistPage = lazy(() => import("./pages/playlistPage"));
const TopRatedMoviesPage = lazy(() => import("./pages/topRatedMoviesPage"));
const TrendingMoviesPage = lazy(() => import("./pages/trendingMoviesPage"));
const RecommendationsPage = lazy(() => import("./pages/recommendationsPage"));
const PopularMoviesPage = lazy(() => import("./pages/popularPage"));
const SimilarPage = lazy(() => import("./pages/similarMoviesPage"));
const ActorHomePage = lazy(() => import("./pages/actorHomePage"));
const ActorPage = lazy(() => import("./pages/actorDetailsPage"));
const MovieCreditsPage = lazy(() => import("./pages/movieCreditsPage"));
const CreditsPage = lazy(() => import("./pages/creditsPage"));
const FollowsPage = lazy(() => import("./pages/followsPage"));


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader/>
                <MoviesContextProvider>
                    <Suspense fallback={<h1>Loading page</h1>}>
                        <Routes>
                            <Route path="/movies/favorites" element={<FavoriteMoviesPage/>}/>
                            <Route path="/movies/upcoming" element={<UpcomingMoviePage/>}/>
                            <Route path="/movies/playlist" element={<PlaylistPage/>}/>
                            <Route path="/actors/follows" element={<FollowsPage/>}/>
                            <Route path="/movies/popular" element={<PopularMoviesPage/>}/>
                            <Route path="/reviews/:id" element={<MovieReviewPage/>}/>
                            <Route path="/movies/topRated" element={<TopRatedMoviesPage/>}/>
                            <Route path="/movies/trending" element={<TrendingMoviesPage/>}/>
                            <Route path="/recommendations/:id" element={<RecommendationsPage/>}/>
                            <Route path="/similar/:id" element={<SimilarPage/>}/>
                            <Route path="/movies/:id" element={<MoviePage/>}/>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/actors" element={<ActorHomePage/>}/>
                            <Route path="/actors/:id" element={<ActorPage/>}/>
                            <Route path="/movieCredits/:id" element={<MovieCreditsPage/>}/>
                            <Route path="/credits/:id" element={<CreditsPage/>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                            <Route path="/reviews/form" element={<AddMovieReviewPage/>}/>
                        </Routes>
                    </Suspense>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App/>);