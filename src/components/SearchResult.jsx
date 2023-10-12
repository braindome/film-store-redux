import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/action";

const API_KEY = "973b4444";
const BASE_URL = "http://www.omdbapi.com/?apikey=";
const URL = `${BASE_URL}${API_KEY}`;
const TITLE_SEARCH_PARAM = "&s="; // https://www.omdbapi.com/ API parameters

console.log(`API URL: ${URL}`);

const SearchResult = ({ filmData }) => {

  const dispatch = useDispatch();

  const handleBuy = (film) => {
    dispatch(addToCart(film));
  };
  
  return (
    <div className="search_result">
      <h2>Search Results</h2>
      <ul>
        {filmData.Search.map((film, index) => (
          <li key={index}>
            <div className="film-item">
              <div className="film-image">
                <img src={film.Poster} alt={film.Title} />
              </div>
              <div className="film-details">
                <h3>{film.Title}</h3>
                <p>Type: {film.Type}</p>
                <p>Year: {film.Year}</p>
                <p>IMDB ID: {film.imdbID}</p>
              </div>
              <button onClick={() => handleBuy(film)}>Buy</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
