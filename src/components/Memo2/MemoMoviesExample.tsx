import { useCallback, useMemo, useState } from "react";

import './MemoMoviesExample.css';

export interface IMovie {
    id: number;
    movieName: string;
    movieRating: number;
}

const MemoMoviesExample = () => {
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
        setMovies([...movies, { id: Math.random(), movieName, movieRating }])
    }, [movieName, movieRating ,movies ])

    return <div className="MovieList">
        {moviesCount}
        {moviesListUI}
        <form onSubmit={addMovie}>
            <input placeholder="Enter Movie Name" defaultValue={movieName} onChange={onMovieNameChange}></input>
            <input placeholder="Enter Movie Rating" defaultValue={movieRating} onChange={onMovieRatingChange}></input>
            <button type="submit">Add Movie</button>
        </form>
    </div>
}

export default MemoMoviesExample