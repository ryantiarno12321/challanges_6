import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

// Popular
export const getMoviePopularList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  console.log({ movieList: movie });
  return movie.data.results;
};

// All Movie
export const getAllMovieDetail = async (id) => {
  const detail = await axios.get(
    `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  return detail.data;
};

// Search Movie
export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};
