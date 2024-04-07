import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: 'wLbZLTACAvzZiBT2ZRSVAyX5yTOO-dc-kg15wcG1AQM',
});

const handleSearch = async () => {
  let images = [];
  try {
    const response = await unsplash.photos.list({
      orderBy: 'popular',
      perPage: 20,
      orientation: 'landscape'
    });

    if (!response.errors) {
      images = response.response.results;
      console.log(images)
      console.log('All good :)');
    } else {
      console.log('Error occurred: ', response.errors[0]);
    }
  } catch (error) {
    console.error(`:( ${error}`);
  }

  return images;
};

export default handleSearch;
