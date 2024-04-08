import { Spinner } from "react-bootstrap";
import { createApi } from "unsplash-js"; //npm i --save unsplash-js

const unsplash = createApi({
  accessKey: 'wLbZLTACAvzZiBT2ZRSVAyX5yTOO-dc-kg15wcG1AQM',
});

const handleSearch = async (searchTerm, setImages, orientation) => {
  let image = null;
  let loading = true;

  console.log(searchTerm);
  if (searchTerm.trim() !== '') {
    try {
      const response = await unsplash.search.getPhotos({
        query: searchTerm,
        perPage: 30,
        orientation: orientation
      });
      if (response.errors) {
        console.log('Error occurred: ', response.errors[0]);
      } else {
        const randomIndex = Math.floor(Math.random() * response.response.results.length);
        image = response.response.results[randomIndex]; // gets a random image object in the array
        console.log('All good :)');
        loading = false;

        // Save the search term and image URL for recent and views
        // sessionStorage.removeItem('recentSearches'); //Clears session data
        const recentSearches = JSON.parse(sessionStorage.getItem('recentSearches')) || [];
        recentSearches.unshift({ searchTerm, imageUrl: image.urls.regular, image, timestamp: new Date().toISOString() });
        sessionStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      }
    } catch (error) {
      console.error(`:( ${error}`);
      loading = false;
    }
  } else {
    console.log('Search term is blank, not making API call.');
    loading = false;
    image = [];
  }

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading....</span>
    </Spinner>
  ) : (
    image ? (
      setImages([image]) 
    ) : (
      <div>No image found</div>
    )
  ); 
};

export default handleSearch;
