import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/action";

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
                <a href={`http://www.imdb.com/title/${film.imdbID}`}>IMDB Page</a>
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
