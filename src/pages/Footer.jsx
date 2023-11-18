function Footer() {
  return (
    <footer className="pt-8 py-4 gap-4 bg-black text-slate-200 text-[1.2rem] grid grid-cols-12 grid-rows-3 ">
      <a href="" className=" col-start-3 hover:underline ">
        <h4 className=" font-semibold">AbeBooks</h4>
        <p className=" font-thin">Books, art & colletibles</p>
      </a>
      <a href="" className=" col-start-5 hover:underline w-[15rem]"> 
        <h4 className=" font-semibold ">Amazon Web Services</h4>
        <p className="font-thin">Scalable Cloud Computing Services</p>
      </a>
      <a href="" className=" col-start-7 hover:underline ">
        <h4 className=" font-semibold">Audible</h4>
        <p className="font-thin">Download Audio Books</p>
      </a>
      <a href="" className=" col-start-9 hover:underline">
        <h4 className=" font-semibold">IMDb</h4>
        <p className="font-thin">Movies, TV & Celebrities</p>
      </a>
      <a href="" className=" col-start-3 hover:underline ">
        <h4 className=" font-semibold">Shopbop</h4>
        <p className="font-thin">Designer Fashion Brands</p>
      </a>
      <a href="" className=" col-start-5 hover:underline w-[15rem]">
        <h4 className=" font-semibold">Amazon Business</h4>
        <p className="font-thin">Everythng for Your Business</p>
      </a>
      <a href="" className=" col-start-7 hover:underline w-[15rem]">
        <h4 className="font-semibold">Prime Now</h4>
        <p className="font-thin">2-Hour Delvery on Everyday items</p>
      </a>
      <a href="" className=" col-start-9 hover:underline w-[20rem]">
        <h4 className=" font-semibold">Amazon Prime Music</h4>
        <p className="font-thin">100 million songs, ad-free Over 15 millon podcast episodes</p>
      </a>
      <div className=" row-start-3 col-span-full text-center text-xs mt-4">
        <p className=" text-[1.1rem] leading-7">
          Conditions of Use & Sale <a href="#" className="hover:underline mx-2"> Privacy Notice </a>
          <a href="#" className="hover:underline"> Interst-Based Ads </a> <br />
          &copy; 1996-2023, Amazon.com,Inc. or its affilates
        </p>
      </div>
    </footer>
  );
}

export default Footer;
