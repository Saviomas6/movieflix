import { Routes, Route } from "react-router-dom";
import Cast from "../pages/cast/Cast";
import MovieDetails from "../pages/movieDetails/MovieDetails";
import Movies from "../pages/movies/Movies";
import NotFound from "../pages/notFound/NotFound";
import Search from "../pages/search/Search";
import Trending from "../pages/trending/Trending";
import TVSeries from "../pages/tvSeries/TVSeries";

const RoutePath = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie_details/:id" element={<MovieDetails />} />
        <Route path="/cast/:id" element={<Cast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutePath;
