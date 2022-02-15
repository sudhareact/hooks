import React from "react"
import MovieForm from "./MovieForm/MovieForm"
import Movies, { IMovie } from "./Movies/Movies"

export interface IMovieCommunicationBridge{
    setMovies:any;
    movies:IMovie[];
}

export const MovieCommunicationBridge = React.createContext<IMovieCommunicationBridge>({
    setMovies: () => {
    },
    movies: []
})

const MovieUIComposer = () => {
    return <MovieCommunicationBridge.Provider value={{setMovies:()=>{},movies:[]}}>
        <Movies></Movies>
        <MovieForm></MovieForm>
    </MovieCommunicationBridge.Provider>
}

export default MovieUIComposer;