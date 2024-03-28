import { Spinner } from "react-bootstrap"
import axios from "axios";
import { useState } from "react";

const unsplashClientId = 'wLbZLTACAvzZiBT2ZRSVAyX5yTOO-dc-kg15wcG1AQM';
let image = null;
let loading = true;


//Returns single image
const handleSearch = async (searchTerm, setImages) => {
    console.log(searchTerm)
    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${unsplashClientId}`;
    try {
        const response = await axios.get(url);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        image = [response.data.results[randomIndex]] //gets a random image in the array
        console.log(response);
        console.log('All good :)')
        loading = false;
    } catch (error) {
        console.error(`:( ${error}`);
    }
    return (
        <div>
            {
                loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading....</span>
                    </Spinner>
                ) : (
                    setImages(image) 
                )
            }
        </div>
    )
};
export default handleSearch;
