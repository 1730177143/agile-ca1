import React, { useState,Suspense,lazy } from "react";
import Header from "../headerActorList";
import Grid from "@mui/material/Grid";
const  FilterCard = lazy(() => import("../filterActorsCard"));
const ActorList = lazy(() => import("../actorList"));


function ActorListPageTemplate({ actors, title, action }) {
    const [nameFilter, setNameFilter] = useState("");

    let displayedActors = actors
        .filter((m) => {
            return m.name && m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        });

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
    };

    return (
        <Grid container sx={{ padding: '20px' }}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>
            <Suspense fallback={<h1>Building list</h1>}>
            <Grid item container spacing={5}>
                <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FilterCard
                        onUserInput={handleChange}
                        nameFilter={nameFilter}
                    />
                </Grid>
                <ActorList action={action} actors={displayedActors}></ActorList>
            </Grid>
            </Suspense>
        </Grid>
    );
}
export default ActorListPageTemplate;