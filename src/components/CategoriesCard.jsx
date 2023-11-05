function Card({title,image}) {
  return (
    <div className="bg-white inline-block p-6 w-[19rem]">
      <h2 className=" font-bold text-xl">{title}</h2>
        <a href="#">
          <img
            src={image}
            className="mb-5 mt-4 w-[18rem] object-cover h-[16rem] "
          />
          <p className="hover:text-orange-500 text-teal-500 text-sm font-medium hover:underline">
            See all offers
          </p>
        </a>
    </div>
  );
}

export default Card;
