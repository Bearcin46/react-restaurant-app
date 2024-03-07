import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  fetchData = async () => {
    data = await fetch("http://localhost:3232/restaurants");
    json = await data.json();
    setListOfRestaurant(json);
    setFilteredRes(json);
  };
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            className="search"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.data.name.toLowerCase().includes(searchItem.toLowerCase())
              );

              setFilteredRes(filteredRestaurant);
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
            setFilteredRes(filteredList);
          }}
        >
          Filter Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((datas) => {
          return <RestaurantCard key={datas.data.id} {...datas.data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
