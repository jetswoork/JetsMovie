import { Router } from "./routes/Router";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { useGetMovies } from "./hooks/useGetMovies";

export const App = () => {
  const {
    getTrending,
    getMostValued,
    getUpcoming,
    getPopularMovie,
    getPopulartv,
  } = useGetMovies();

  useEffect(() => {
    getTrending();
    getMostValued();
    getUpcoming();
    getPopularMovie();
    getPopulartv();
  }, []);

  return (
    <div className="mainContainer">
      <ScrollToTop />
      <Router />
    </div>
  );
};
