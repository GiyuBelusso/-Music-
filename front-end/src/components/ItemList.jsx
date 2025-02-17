import React, { use } from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation(); //useLocation() is a hook that returns the location object that represents the current URL. You can think of it like a useState that returns a new location whenever the URL changes.
  const isHome = pathname === "/"; //If the current path is the home page, the value of isHome will be true.
  let realItem;

  realItem = isHome ? items : Infinity; //If the current path is the home page, the value of realItem will be the value of items. Otherwise, it will be Infinity.
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}Populares</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < realItem)
          .map((curreObj, index) => (
            <SingleItem
              idPath={idPath}
              {...curreObj}
              key={`${title}--${index}`}
            /> //(... = all values of the object)
          ))}
      </div>
    </div>
  );
};

export default ItemList;
