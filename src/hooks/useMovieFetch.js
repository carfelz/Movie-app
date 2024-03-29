import { useState, useEffect } from "react";
import API from '../API'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
export const useMovieFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const fetchMovies = async (page, searchTerm = "") => {
        try{
            setLoading(true)
            setError(false)
            const movies = await API.fetchMovies(searchTerm, page);
            
            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        }catch(err){
            setError(true)
        }
        setLoading(false)
    }
    useEffect( () => {
        fetchMovies(1)
    }, [])

    return { state, loading, error }
}

