import { useContext } from "react";
import { PageContext } from "../store/amazon-context";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../store/dataFetch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiError } from "react-icons/bi";
function Categories() {
  const { changeCatogery, droppedOff } = useContext(PageContext);
  const {
    data: list,
    isError,
    isLoading,
  } = useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ["list"],
  });
  if (isError) {
    return (
      <div className=" flex flex-col items-center">
        <BiError size="6rem" className=" text-red-600 " />
        <p className=" font-semibold p-4 text-[1.4rem]" >Please Check ur internet </p>;
      </div>
    );
  }
  if (isLoading) {
    return (
      <h2 className=" font-semibold p-4">
        <AiOutlineLoading3Quarters size="4rem" className=" animate-spin" />
      </h2>
    );
  }
  const categoriesChangleHandler = (name) => {
    changeCatogery(name);
    droppedOff();
  };
  return (
    <ul className="overflow-y-auto h-[35rem] text-[1.6rem]">
      {list?.map((item) => (
        <li
          onClick={() => categoriesChangleHandler(item.name)}
          className="hover:bg-blue-800 hover:text-white w-full pl-2"
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
