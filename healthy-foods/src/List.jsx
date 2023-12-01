import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./List.module.css";
// import React from "react";

const List = ({ item, buttonOnClick }) => {
  return (
    <>
      <li className="list-group-item">
        {item}
        <button
          // onClick={(event) => console.log(foodItems + " is being bought.")}
          onClick={buttonOnClick}
          className={`${styles.Button} btn btn-success`}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default List;
