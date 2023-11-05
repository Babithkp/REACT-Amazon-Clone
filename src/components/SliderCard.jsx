import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Slider from "react-slick";
import mobile1 from "../assets/sliderPhones/honor90_5g.jpg";
import mobile2 from "../assets/sliderPhones/iphone13.jpg";
import mobile3 from "../assets/sliderPhones/iqooNeo7pro.jpg";
import mobile4 from "../assets/sliderPhones/itelP55_5g.jpg";
import mobile5 from "../assets/sliderPhones/lavaagni2_5g.jpg";
import mobile6 from "../assets/sliderPhones/oneplus11_5g.jpg";
import mobile7 from "../assets/sliderPhones/oneplusNordCE35G.jpg";
import mobile8 from "../assets/sliderPhones/realmenarzo60_5g.jpg";
import mobile9 from "../assets/sliderPhones/redmi12c.jpg";
import mobile10 from "../assets/sliderPhones/realmenarzoN53.jpg";
import mobile11 from "../assets/sliderPhones/redmi125G.jpg";
import mobile12 from "../assets/sliderPhones/redmiA2.jpg";
import mobile13 from "../assets/sliderPhones/samsunggalaxyA34_5g.jpg";
import mobile14 from "../assets/sliderPhones/samsungGalaxyM14_5G.jpg";
import mobile15 from "../assets/sliderPhones/samsungGalaxyM34_5g.jpg";
import mobile16 from "../assets/sliderPhones/tecnoPova5pro_5g.jpg";

const phoneDetails = [
  mobile1,
  mobile2,
  mobile3,
  mobile4,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
  mobile9,
  mobile10,
  mobile11,
  mobile12,
  mobile13,
  mobile14,
  mobile15,
  mobile16,
];

function SliderCard() {
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
    <div className=" col-span-full w-[97%] bg-white relative p-4 border-none outline-none border-0">
      <div className="flex">
        <h3 className="font-bold text-xl ">
          Explore top offers in smartphones
        </h3>
        <a
          href="#"
          className="hover:text-orange-500 text-teal-500 text-sm font-medium hover:underline mx-5 mt-2"
        >
          See all deals
        </a>
      </div>
      <Slider {...settings}>
        {phoneDetails.map((phone, i) => (
          <a href="#" key={i} className="outline-none">
            <img src={phone} className="mt-4" />
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCard;
