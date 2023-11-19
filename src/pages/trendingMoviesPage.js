import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTrending } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TrendingMoviesPage = (props) => {
    // const [movies, setMovies] = useState([]);
    const {  data, error, isLoading, isError }  = useQuery('discoverTrending', getTrending)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <PageTemplate
            title='Trending Movies'
            movies={movies}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />
            }}
        />

    );
};
export default TrendingMoviesPage;