import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import amazonIcon from "../assets/amazon-logo.webp";
import { useEffect, useState } from "react";
import Categories from "./Categories";
function Navbar() {
  const [dropped, setDropped] = useState(false);
  const [isSticky,setIsSticky] = useState(false)
  const [selectedCatogery, setSelectedCatogery] = useState("All");
  const changeCatogery = (name) => {
    setSelectedCatogery(name);
  };
  const toggleHandler = () => {
    setDropped((prev) => !prev);
  };
  useEffect(() => {
    toggleHandler();
  }, [selectedCatogery]);

  useEffect(()=>{
    const handleScroll = () =>{
      setIsSticky(window.scrollY >= 100)
    }
    return () => window.addEventListener("scroll",handleScroll)
  })
  return (
    <nav className={` h-[9%] bg-black flex justify-between ${isSticky? "fixed w-full z-10 ":""}`}>
      <div className="amazon  ml-4 my-3 mb-2">
        <a href="#">
        <img className="h-full z-10" src={amazonIcon} alt="Amazon Logo" />
        </a>
      </div>
      <div className="w-[60%] flex mt-2">
        <div className="h-10  bg-slate-200 rounded-l-md">
          <button className="flex w-full h-full" onClick={toggleHandler}>
            <p className="mt-2 ml-3 text-base w-auto">{selectedCatogery}</p>
            <div className="mt-3 ml-1">
              <IoMdArrowDropdown size="1.2em" />
            </div>
          </button>
        </div>
        {dropped && (
          <section className=" z-20 absolute top-12 bg-white rounded-md border border-stone-600  text-left">
            <Categories onChange={changeCatogery} />
          </section>
        )}
        <form className=" flex h-10 w-3/4">
          <input
            className=" w-full p-2 outline-yellow-500"
            type="text"
            id="search"
            placeholder="Search Amazon.in"
          />
          <button className="w-16 bg-yellow-500 rounded-r-md flex justify-center items-center">
            <BiSearchAlt2 size="2em" />
          </button>
        </form>
      </div>
      <div className="text-white font-semibold mt-2 hover:outline-stone-100 ">
        <p className=" text-xs">Returns</p>
        <p>& Orders</p>
      </div>
      <div className="text-white flex w-20 mt-4  justify-center hover:outline-stone-100">
        <div className="relative">
          <MdOutlineAddShoppingCart size="2.5em" />
          <p className="left-3 bottom-[1.7rem] text-center w-4 absolute text-yellow-500 font-bold bg-black">
            0
          </p>
        </div>
        <p className="font-bold mt-2 max-lg:hidden">Cart</p>
      </div>
    </nav>
  );
}

export default Navbar;
