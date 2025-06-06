import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";


const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const ishome = pathname === '/'
  const finalItems = ishome ? items : Infinity;

  return (
          <div className="item-list">
            <div className="item-list__header">
              <h2>{title} populares</h2>

              {ishome ? <Link to={path} className="item-list__link" >
                Mostrar tudo
              </Link> : <></>}
              
            </div>
    
            <div className="item-list__container">
             {itemsArray
             .filter((currentValue, index) => index < finalItems)
             .map((currObj, index) => (
              <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`} />
             ))}
            </div>
          </div>
    )
}

export default ItemList