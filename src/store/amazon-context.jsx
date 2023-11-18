/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const PageContext = createContext({
  categories: "",
  changeCatogery: () => {},
  isDropped: Boolean,
  droppedOn: ()=>{},
  droppedOff: ()=>{},
  droppedToggle:()=>{}
});

export const PageContextProvider = (props ) => {
  const [categories, setCategories] = useState("All");
  const [isDropped, setIsDropped] = useState(false);
  
  const changeCatogery = (name) => {
    setCategories(name);
  };
  const droppedOn = () =>{
    setIsDropped(true)
  }
  const droppedOff = () =>{
    setIsDropped(false)
  }
  const droppedToggle = () =>{
    setIsDropped(!isDropped)
  }

  const pageValue = {
    categories,
    changeCatogery,
    isDropped,
    droppedOn,
    droppedOff,
    droppedToggle
  };
  return (
    <PageContext.Provider value={pageValue}>{props.children}</PageContext.Provider>
  );
};
