import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import amazonIcon from "../assets/amazon-logo.webp";
import { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import { PageContext } from "../store/amazon-context";

function Navbar() {
  const { categories, isDropped, droppedOff,droppedToggle } = useContext(PageContext);

  const [isSticky, setIsSticky] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
      droppedOff()

    };
    return () => window.addEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={` h-[6rem] text-[1.4rem] bg-black flex justify-between w-[100%] overflow-hidden ${
        isSticky ? "fixed w-full z-10 " : ""
      }`}
    >
      <div className="amazon  ml-4 my-3 mb-2">
        <a href="#">
          <img className="h-full z-10" src={amazonIcon} alt="Amazon Logo" />
        </a>
      </div>
      <div className="w-[70%] flex items-center mt-2">
        <div className="h-[70%]  bg-slate-200 rounded-l-md">
          <button
            className="flex w-full h-full "
            onClick={droppedToggle}
          >
            <p className="ml-4 mt-4">{categories}</p>
            <div className="mt-6 ml-1">
              <IoMdArrowDropdown className="text-[1.4rem]"/>
            </div>
          </button>
        </div>
        
        {isDropped && (
          <section className=" z-20 absolute top-20 bg-white rounded-md border border-stone-600  text-left ">
            <Categories />
          </section>
        )}
        <form className=" flex h-[70%] w-3/4">
          <input
            className=" w-full p-2 outline-yellow-500 "
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
        <p >Returns</p>
        <p>& Orders</p>
      </div>
      <div className="text-white flex w-20 items-center mr-4  justify-center hover:outline-stone-100">
        <div className="relative ">
          <MdOutlineAddShoppingCart size="2.5em" />
          <p className="left-5 -top-2 text-center w-[1.1rem] absolute text-yellow-500 font-bold bg-black">
            0
          </p>
        </div>
        <p className="font-bold mt-2 max-lg:hidden">Cart</p>
      </div>
    </nav>
  );
}

export default Navbar;
