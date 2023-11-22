import React, {useState} from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([]);
    const [myReviews, setMyReviews] = useState({});
    const [playlist, setPlaylist] = useState([]);
    const [follows, setFollows] = useState([]);
    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        } else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    // We will use this function in a later section
    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };
    const addToFollows = (actor) => {
        let newFollows = [];
        if (!follows.includes(actor.id)) {
            newFollows = [...follows, actor.id];
        } else {
            newFollows = [...follows];
        }
        setFollows(newFollows)
    };
    const removeFromFollows = (actor) => {
        setFollows(follows.filter(
            (aId) => aId !== actor.id
        ))
    };
    const addToPlaylist = (movie) => {
        let newToPlay = [];
        if (!playlist.includes(movie.id)) {
            newToPlay = [...playlist, movie.id];
        } else {
            newToPlay = [...playlist];
        }
        setPlaylist(newToPlay);
    };

    console.log(playlist);

    const removeFromPlaylist = (movie) => {
        setPlaylist(playlist.filter(
            (mId) => mId !== movie.id
        ))
    };

    const addReview = (movie, review) => {
        setMyReviews({...myReviews, [movie.id]: review})
    };
    //console.log(myReviews);

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                playlist,
                addToPlaylist,
                removeFromPlaylist,
                follows,
                addToFollows,
                removeFromFollows,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;