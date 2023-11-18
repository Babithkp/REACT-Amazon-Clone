import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";

import image1 from "../assets/trendingDeals/curtainLight.jpg";
import image2 from "../assets/trendingDeals/cutainStringLights.jpg";
import image3 from "../assets/trendingDeals/decorationLight.jpg";
import image5 from "../assets/trendingDeals/diwaliLighting.jpg";
import image6 from "../assets/trendingDeals/doorMat.jpg";
import image7 from "../assets/trendingDeals/fastrackWatch.jpg";
import image8 from "../assets/trendingDeals/fibrePiloow.jpg";
import image9 from "../assets/trendingDeals/img1.jpg";
import image10 from "../assets/trendingDeals/prestol.jpg";
import image11 from "../assets/trendingDeals/rangoli.jpg";
import image12 from "../assets/trendingDeals/riceLight.jpg";
import image13 from "../assets/trendingDeals/shoeBag.jpg";
import image14 from "../assets/trendingDeals/stalit.jpg";
import image15 from "../assets/trendingDeals/stringLight.jpg";
import image16 from "../assets/trendingDeals/tissues.jpg";

const dealDetails = [
  image1,
  image2,
  image3,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];

function SliderCardDetails() {
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" absolute bottom-[4rem] z-10 h-24 w-12 rounded-sm bg-white"
      >
        <div>
          <MdKeyboardArrowLeft
            size="2.5em"
            style={{ marginTop: "1.6rem", marginLeft: ".3rem" }}
          />
        </div>
      </div>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className=" absolute bottom-[4rem]  z-10 h-24 w-12  right-0 rounded-sm bg-white"
      >
        <MdKeyboardArrowRight
          size="2.5em"
          style={{ marginTop: "1.6rem", marginLeft: ".3rem" }}
        />
      </div>
    );
  }

  const settings = {
    slidesToShow: 6,
    infinite: false,
    speed: 500,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className=" col-span-full w-[97%] bg-white relative p-4 border-none outline-none border-0 text-[1.4rem]">
      <div className="flex">
        <h3 className="font-bold text-[1.8rem] ">Trending deals</h3>
        <a
          href="#"
          className="hover:text-orange-500 text-teal-500 text-[1.2rem] font-medium hover:underline mx-5 mt-2"
        >
          See all deals
        </a>
      </div>
      <Slider {...settings}>
        {dealDetails.map((phone, i) => (
          <a href="#" key={i} className="outline-none">
            <img src={phone} className="mt-4 h-26 w-[12rem] h-[12rem] object-contain mx-4" />
            <section className="flex">
              <p>₹99.00</p>
              <p className=" text-slate-400 text-sm mt-1 ml-3">
                M.R.P.:<s>₹999.00</s>
              </p>
            </section>
              <p>rice lights for home decoration</p>
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCardDetails;
