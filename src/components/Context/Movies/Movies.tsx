import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MovieCommunicationBridge } from "../MovieUIComposer";

import './Movies.css';

export interface IMovie {
    id: number;
    movieName: string;
    movieRating: number;
}

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([
        {
            id: 1,
            movieName: "Pushpa",
            movieRating: 4.5
        },
        {
            id: 2,
            movieName: "Kabali",
            movieRating: 4.2
        },
        {
            id: 3,
            movieName: "Dilwale",
            movieRating: 4.9
        },
    ]);

    const moviesBridge = useContext(MovieCommunicationBridge);

    useEffect(()=>{
        moviesBridge.setMovies = setMovies;
        moviesBridge.movies = movies; 
    },[movies,setMovies])

    const moviesListUI = useMemo(() => {
        return movies.map((singleMovie: IMovie) => {
            return <div className="Movie" key={singleMovie.id}>
                <div className="MovieName Center">{singleMovie.movieName}</div>
                <div className="MovieRating Center">{singleMovie.movieRating}</div>
            </div>
        })
    }, [movies])

    const moviesCount = useMemo(() => {
        return movies.length;
    }, [movies])

    

    return <div className="MovieList">
        {moviesCount}
        {moviesListUI}
    </div>
}

export default Movies