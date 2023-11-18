import Stars from "./Stars";
import primeLogo from "../assets/prime-amazon.png";

function Results({ data }) {
  return (
    <div className="bg-white p-2 h-full">
      <img src={data.images[0]} className="w-[20rem] h-[17rem] object-contain" />
      <div>
        <h1 className=" font-medium">
          {data.title}
        </h1>
        <Stars star={data.rating} reviews={data.numReviews}/>
        <span className="flex">
          <p className=" font-medium">{data.price}</p>
          <p className="ml-2 font-normal">{data.oldPrice? <s>{data.oldPrice[0]}</s>:"New price"}</p>
        </span>
        <div className="flex items-center">
          <img src={primeLogo} className=" w-[5rem] h-[4.5rem] object-cover" />
          <span className="flex">
            <p>Get</p> <p className="ml-2 font-semibold text-[1.2rem]">{data.shipping}</p>
          </span>
        </div>
        <p className=" font-medium">{data.store}</p>
      </div>
    </div>
  );
}

export default Results;
