import MovieFilters from "../components/movies/MovieFilters";
import MoviesList from "../components/movies/MoviesList";
import BannerSlider from "../components/shared/BannerSlider";

function Movies() {
  return (
    <div>
      <BannerSlider />
      <div className="flex flex-col md:flex-row bg-[#f5f5f5] min-h-screen md:px-[100px] pb-10 pt-8 ">
        <MovieFilters />
        <MoviesList/>
      </div>
    </div>
  );
}
export default Movies;
