import React from "react";
// config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config"

//hooks
import { useMovieFetch } from "../hooks/useMovieFetch"

// componenets
import  HeroImage  from "./Hero/HeroImage"


// images
import noImage from '../images/no_image.jpg'

const Home = () => {
    const { state, loading, error } = useMovieFetch()
    return (
        <>
            {
                state.results[0] && 
                <HeroImage 
                    image={ `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
                    title={state.results[0].original_title} 
                    text={state.results[0].overview}
                ></HeroImage>
            }
        </>
    )
}

export default Home