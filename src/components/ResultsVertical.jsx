/* eslint-disable react/prop-types */
import primeLogo from "../assets/prime-amazon.png";
import Stars from "./Stars";
function ResultsVertical({ data }) {
  return (
    <section className="flex border mb-2 p-4 bg-white text-2xl">
      <div className="relative transform overflow-hidden rounded-l-md">
        <span className=" absolute bg-[#209b7b] text-white text-sm font-medium p-[3px] skew-x-[-25deg] px-3 left-[-.5rem]">
          <p className=" skew-x-[25deg] text-lg">{data.condition}</p>
        </span>
        <img
          src={data.images[0]}
          className=" w-[19rem] h-[19rem] object-contain"
        />
      </div>
      <div className=" p-4">
        <h1 className=" font-medium">{data.title}</h1>
        <Stars star={data.rating} reviews={data.numReviews} />
        <span className="flex">
          <p className=" font-medium">{data.price}</p>
          <p className="ml-2 font-normal">
            {data.oldPrice ? <s>{data.oldPrice[0]}</s> : "New price"}
          </p>
        </span>
        <div className="flex items-center">
          <img src={primeLogo} className=" w-[4rem] h-[2.5rem] object-cover" />
          <span className="flex">
            <p>Get</p> <p className="ml-2 font-medium">{data.shipping}</p>
          </span>
        </div>
        <p className=" font-medium">{data.store}</p>
      </div>
    </section>
  );
}

export default ResultsVertical;
