import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [serachItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    data = await fetch("http://localhost:3232/restaurants");
    json = await data.json();
    setListOfRestaurant(json);
  };
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="serach">
          <input
            type="text"
            className="search-box"
            value={serachItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            className="search"
            onClick={() => {
              listOfRestaurant.filter((res) => res.data.name === serachItem);
            }}
          >
            SEARCH
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Filter Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((datas) => {
          return <RestaurantCard key={datas.data.id} {...datas.data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
