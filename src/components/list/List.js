import React from "react";
import Item from "../item/Item";

const List = ({arr}) => {
 
  const newfunc = arr.map((elem, index) => {
    return <Item key={elem} title={elem} />;
  });
  return <>{newfunc}</>;
};

export default List;
