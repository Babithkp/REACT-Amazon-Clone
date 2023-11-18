import { useContext } from "react";
import GroupOfCards from "../components/GroupOfCards";
import { PageContext } from "../store/amazon-context";

function Body() {
  const {droppedOff} = useContext(PageContext)
  return (
    <div className=" bg-slate-100 w-full flex  mt-[-20%] text-[1.4rem]" onClick={droppedOff}>
      <GroupOfCards />
    </div>
  );
}

export default Body;
