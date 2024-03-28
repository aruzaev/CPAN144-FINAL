import axios from "axios";

const unsplashClientId = 'wLbZLTACAvzZiBT2ZRSVAyX5yTOO-dc-kg15wcG1AQM';

//Returns single image
const handleSearch = async (searchTerm, setImages) => {
    console.log(searchTerm)
    const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${unsplashClientId}`;
    try {
        const response = await axios.get(url);
        console.log(response);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setImages([response.data.results[randomIndex]]); //gets a random image in the array
        console.log('All good :)')
    } catch (error) {
        console.error(`:( ${error}`);
    }
};

export default handleSearch;
