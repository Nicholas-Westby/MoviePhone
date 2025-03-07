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
  },

  async fetchMovieDetails(movieId: string) {
    const allMovies =  [
      {
        "id": "1",
        "releaseYear": "1977",
        "title": "Star Wars",
        "image": "https://image.tmdb.org/t/p/w1280/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "url": "https://www.themoviedb.org/movie/11-star-wars",
      },
      {
        "id": "2",
        "releaseYear": "1985",
        "title": "Back to the Future",
        "image": "https://image.tmdb.org/t/p/w1280/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
        "url": "https://www.themoviedb.org/movie/105-back-to-the-future",
      },
      {
        "id": "3",
        "releaseYear": "1999",
        "title": "The Matrix",
        "image": "https://image.tmdb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        "url": "https://www.themoviedb.org/movie/603-the-matrix",
      },
      {
        "id": "4",
        "releaseYear": "2010",
        "title": "Inception",
        "image": "https://image.tmdb.org/t/p/w1280/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        "url": "https://www.themoviedb.org/movie/27205-inception",
      },
      {
        "id": "5",
        "releaseYear": "2014",
        "title": "Interstellar",
        "image": "https://image.tmdb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "url": "https://www.themoviedb.org/movie/157336-interstellar",
      }
    ];
    return new Promise(resolve => {
      const movie = allMovies.find(x => x.id === movieId);
      resolve(movie);
    });
  }
};
export default ajaxTools;
