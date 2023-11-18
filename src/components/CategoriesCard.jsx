/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../store/amazon-context";

function Card({title,image,link,renewed}) {
  let dataLink =`/products/${link}`
  if(link?.includes("-") || renewed !== true){
    dataLink = `${link}`
  }
  const {changeCatogery} = useContext(PageContext)
  const changeCatogeryHandler = (title) =>{
    changeCatogery(title)
  }
  return (
    <div className="bg-white inline-block p-6 w-[30rem] h-[40rem] ">
      <h2 className=" font-bold text-[1.8rem]">{title}</h2>
        <Link to={dataLink} onClick={()=>changeCatogeryHandler(link)}>
          <img
            src={image}
            className="mb-5 mt-4 w-[100%] object-cover h-[70%] "
          />
          <p className="hover:text-orange-500 text-teal-500 text-[1.2rem] font-medium hover:underline">
            See all offers
          </p>
        </Link>
    </div>
  );
}

export default Card;
