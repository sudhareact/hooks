import { useState, useCallback, useContext } from "react";
import { MovieCommunicationBridge } from "../MovieUIComposer";

const MovieForm = () => {

    const movieBridge = useContext(MovieCommunicationBridge);

    const [movieName, setMovieName] = useState<string>("");
    const [movieRating, setMovieRating] = useState<number>(0);

    const onMovieNameChange = useCallback((e) => {
        setMovieName(e.target.value)
    }, [])

    const onMovieRatingChange = useCallback((e) => {
        setMovieRating(e.target.value)
    }, [])

    const addMovie = useCallback((e) => {
        e.preventDefault();
        console.log(movieName, movieRating);
        movieBridge.setMovies([...movieBridge.movies, { id: Math.random(), movieName, movieRating }])
    }, [movieName, movieRating, movieBridge.setMovies, movieBridge.movies])

    return <form onSubmit={addMovie}>
        <input placeholder="Enter Movie Name" defaultValue={movieName} onChange={onMovieNameChange}></input>
        <input placeholder="Enter Movie Rating" defaultValue={movieRating} onChange={onMovieRatingChange}></input>
        <button type="submit">Add Movie</button>
    </form>
}

export default MovieForm;