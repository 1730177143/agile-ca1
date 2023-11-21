import React, {useEffect} from "react";
import {getActors} from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import {useQuery} from 'react-query';
import Spinner from '../components/spinner';

const HomePage = (props) => {

    const {data, refetch, error, isLoading, isError} = useQuery('discover', getActors);
    console.log(data);
    useEffect(() => {
        if (!data || !data.results[0].name) {
            refetch();
        }
    }, [data, refetch]);
    if (isLoading) {
        return <Spinner/>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    if (!data || !data.results[0].name) {
        return <Spinner/>; // 或者返回某种“无数据”或“加载中”的提示
    }
    const actors = data.results;

    return (
        <PageTemplate
            title="Discover Actors"
            actors={actors}
            action={(actor) => {
            }}
        />
    );
};
export default HomePage;