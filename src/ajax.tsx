const apiHost = 'https://facebook.github.io';//'https://bakesaleforgood.com';

const ajaxTools = {
  async fetchInitialMovies() {
    try {
      let response = await fetch(`${apiHost}/react-native/movies.json`);
      let responseJson = await response.json();
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }
};
export default ajaxTools;
