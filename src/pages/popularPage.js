import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopular } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import { useQuery } from 'react-query';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const PopularMoviesPage = (props) => {
  // const [movies, setMovies] = useState([]);
  const {  data, error, isLoading, isError }  = useQuery('discoverPopular', getPopular)

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
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}    
    />
    
  );
};
export default PopularMoviesPage;