import { idioma, key, services } from "../services/api";
import { useDispatch } from "react-redux";
import {
  listMostValued,
  listPopularMovies,
  listPopularTv,
  listSimilar,
  listTrends,
  listUpcoming,
  movieId,
  updateVideo,
} from "../redux/slices/movies/moviesSlice";

export const useGetMovies = () => {
  const dispatch = useDispatch();

  const searchMovie = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    try {
      const { data } = await services.get(`/${type}/movie`, {
        params: {
          api_key: key,
          query: searchKey,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getVideo = async (id) => {
    try {
      const { data } = await services.get(
        `/movie/${id}/videos?api_key=${key}&${idioma}`
      );
      dispatch(updateVideo(data.results[0]));
    } catch (error) {
      console.log(error);
    }
  };

  const getMovie = async (id) => {
    try {
      const { data } = await services.get(
        `/movie/${id}?api_key=${key}&${idioma}`
      );
      dispatch(movieId(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilar = async (id) => {
    try {
      const { data } = await services.get(
        `/movie/${id}/similar?api_key=${key}&${idioma}`
      );

      dispatch(listSimilar(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await services.get(
        `/trending/all/day?api_key=${key}&${idioma}`
      );
      dispatch(listTrends(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getMostValued = async () => {
    try {
      const { data } = await services.get(
        `/movie/top_rated?api_key=${key}&${idioma}&page=1`
      );
      dispatch(listMostValued(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getUpcoming = async () => {
    try {
      const { data } = await services.get(
        `/movie/upcoming?api_key=${key}&${idioma}&page=1`
      );
      dispatch(listUpcoming(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularMovie = async () => {
    try {
      const { data } = await services.get(
        `/movie/popular?api_key=${key}&${idioma}&page=1`
      );
      dispatch(listPopularMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getPopulartv = async () => {
    try {
      const { data } = await services.get(
        `/tv/popular?api_key=${key}&${idioma}&page=1`
      );
      dispatch(listPopularTv(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getVideo,
    getPopulartv,
    getPopularMovie,
    getUpcoming,
    getMostValued,
    getTrending,
    getMovie,
    searchMovie,
    getSimilar,
  };
};
