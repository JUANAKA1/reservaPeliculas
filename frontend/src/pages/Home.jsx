import LiveEvents from "../components/LiveEvents";
import BannerSlider from "../components/shared/BannerSlider";
import Recommended from "../components/shared/Recommended";

function Home() {
  return (
    <div>
      <BannerSlider />
      <Recommended />
      <LiveEvents />
    </div>
  );
}
export default Home;
