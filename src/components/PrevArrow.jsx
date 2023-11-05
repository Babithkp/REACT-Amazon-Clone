import { BsChevronLeft } from "react-icons/bs";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        zIndex: "1",
      }}
      className="text-white absolute  h-[15rem] hover:border-2 ml-3"
      onClick={onClick}
    >
        <div className="mt-24">
      <BsChevronLeft size='3em'/>
        </div>
    </div>
  );
}

export default PrevArrow;
