/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../store/amazon-context";

function CardFour({data}) {
  const {changeCatogery} = useContext(PageContext)
  const changeCatogeryHandler = (title) =>{
    changeCatogery(title)
  }

  return (
    <div className="bg-white inline-block p-6 w-[30rem] h-[40rem]">
      <h2 className=" font-bold text-[1.9rem]">
        {data.title}
      </h2>
      <div>
        <div className="grid grid-cols-2 gap-2">
          {data.details.map((details, i) => (
            <Link to={details.link} key={i} onClick={()=>changeCatogeryHandler(details.Categories)}>
              <img src={details.img} className=" mt-4 h-[10rem]  object-cover" />
              <p className=" text-[1.2rem]">
                {details.title}
              </p>
            </Link>
          ))}
        </div>
        <a href="#" className=" text-teal-500 text-[1.2rem] font-medium hover:underline ">
          See all offers
        </a>
      </div>
    </div>
  );
}

export default CardFour;
