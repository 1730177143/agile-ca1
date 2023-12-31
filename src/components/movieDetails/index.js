import React, {useState,Suspense,lazy} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import {Link} from "react-router-dom";
const MovieReviews = lazy(() => import("../movieReviews"));


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = {margin: 0.5};

const MovieDetails = ({movie}) => {  // Don't miss this!
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>

            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Genres" sx={{...chip}} color="primary"/>
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} sx={{...chip}}/>
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={{...root}}>
                <Chip icon={<AccessTimeIcon/>} label={`${movie.runtime} min.`}/>
                <Chip
                    icon={<MonetizationIcon/>}
                    label={`${movie.revenue.toLocaleString()}`}
                />
                <Chip
                    icon={<StarRate/>}
                    label={`${movie.vote_average} (${movie.vote_count}`}
                />
                <Chip label={`Released: ${movie.release_date}`}/>
            </Paper>
            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Production countries" sx={{...chip}} color="primary"/>
                </li>
                {movie.production_countries.map((p) => (
                    <li key={p.name}>
                        <Chip label={p.name} sx={{...chip}}/>
                    </li>
                ))}
            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: '1em',
                    right: '1em'
                }}
            >
                <NavigationIcon/>
                Reviews
            </Fab>
            <Suspense fallback={<h1>Loading page</h1>}>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews movie={movie}/>
            </Drawer>
            </Suspense>
            <Link to={`/recommendations/${movie.id}`}>
                <Fab
                    color="secondary"
                    variant="extended"
                    sx={{
                        position: 'fixed',
                        bottom: '5em',
                        right: '1em'
                    }}
                >
                    <NavigationIcon/>
                    Recommendations
                </Fab>
            </Link>
            <Link to={`/similar/${movie.id}`}>
                <Fab
                    color="secondary"
                    variant="extended"
                    sx={{
                        position: 'fixed',
                        bottom: '1em',
                        right: '10em'
                    }}
                >
                    <NavigationIcon/>
                    Similar
                </Fab>
            </Link>
            <Link to={`/credits/${movie.id}`}>
                <Fab
                    color="secondary"
                    variant="extended"
                    sx={{
                        position: 'fixed',
                        bottom: '1em',
                        right: '19em'
                    }}
                >
                    <NavigationIcon/>
                    Relational Actors
                </Fab>
            </Link>
        </>
    )
        ;
};
export default MovieDetails;