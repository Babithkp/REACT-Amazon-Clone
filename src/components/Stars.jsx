import {FaStar ,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Stars =({ star, reviews })=> {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;
    return (
      <span key={index} className=" text-[#ffa41c]">
        {star >= index + 1 ? (
          <FaStar />
        ) : star >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return <div className=" flex items-center">
    {ratingStar}
    <p>({reviews})</p>
  </div>
}

export default Stars;
