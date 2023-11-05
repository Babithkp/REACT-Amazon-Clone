/* eslint-disable react/prop-types */

function CardFour({data}) {
  return (
    <div className="bg-white inline-block p-6 w-[19rem] ">
      <h2 className=" font-bold text-xl">
        {data.title}
      </h2>
      <div>
        <div className="grid grid-cols-2 gap-2">
          {data.images.map((img, i) => (
            <a key={i} href="#">
              <img src={img.img} className=" mt-4 h-[5.3rem]  object-cover" />
              <p className=" text-xs">
                {img.title}
              </p>
            </a>
          ))}
        </div>
        <a href="#" className=" text-teal-500 text-sm font-medium hover:underline ">
          See all offers
        </a>
      </div>
    </div>
  );
}

export default CardFour;
