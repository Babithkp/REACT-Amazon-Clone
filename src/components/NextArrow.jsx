import { BsChevronRight } from "react-icons/bs";

function NextArrow(props) {
    const {onClick } = props;
    return (
        <div
        style={{
          display: "block",
          zIndex: "1",
        }}
        className="text-white absolute  h-[15rem] hover:border-2 mr-3 top-0 right-0"
        onClick={onClick}
      >
        <div className="mt-24">
        <BsChevronRight size='3em'/>
        </div>
      </div>
    );
}

export default NextArrow