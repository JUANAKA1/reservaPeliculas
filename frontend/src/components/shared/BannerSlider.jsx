import Slider from "react-slick";
import { banners } from "../../utils/constants";

function BannerSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "200px", // Desktop
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // celulares
        settings: {
          centerMode: false, // 🚀 sin centrado
          centerPadding: "0px",
          slidesToShow: 1, // 🔑 fuerza a mostrar un slide
          arrows: false, // opcional
          dots: true,
        },
      },
      {
        breakpoint: 400, // celulares pequeños (ej. 448px)
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <Slider {...settings}>
          {banners.map((banner, i) => (
            <div key={i} className="px-2">
              <img
                src={banner}
                alt={`banner-${i}`}
                className="w-full h-[180px] sm:h-[250px] md:h-[300px] rounded-xl object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BannerSlider;
