import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/headerSlider/slider1.jpg";
import slider2 from "../assets/headerSlider/slider2.jpg";
import slider3 from "../assets/headerSlider/slider3.jpg";
import slider4 from "../assets/headerSlider/slider4.jpg";
import slider5 from "../assets/headerSlider/slider7.jpg";
import slider6 from "../assets/headerSlider/slider6.jpg";

function Header() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <header className="w-full relative">
      <Slider {...settings}>
        <a  href="">
          <img className="slider" src={slider1} alt="Slider" />
        </a>
        <a href="">
          <img src={slider2} alt="Slider" />
        </a>
        <a href="">
          <img src={slider3} alt="Slider" />
        </a>
        <a href="">
          <img src={slider4} alt="Slider" />
        </a>
        <a href="">
          <img src={slider5} alt="Slider" />
        </a>
        <a href="">
          <img src={slider6} alt="Slider" />
        </a>
      </Slider>
    </header>
  );
}

export default Header;
