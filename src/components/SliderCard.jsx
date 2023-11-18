import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Slider from "react-slick";

function SliderCard({Details,title}) {
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
          {title}
        </h3>
        <a
          href="#"
          className="hover:text-orange-500 text-teal-500 text-sm font-medium hover:underline mx-5 mt-2"
        >
          See all deals
        </a>
      </div>
      <Slider {...settings}>
        {Details.map((phone, i) => (
          <a href="#" key={i} className="outline-none">
            <img src={phone} className="mt-4" />
          </a>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCard;
