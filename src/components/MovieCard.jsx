import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import fetchApi from '../services/fetchApi';

export default function MovieCard({ movieId }) {
  const [movieInfo, setMovieInfo] = useState({});
  const { image, title, genres, plot, imDbRating } = movieInfo;

  useEffect(() => {
    fetchApi(movieId, setMovieInfo);
    
  }, [movieId]);
  
  return (
    <div
      className="flex flex-col justify-between border border-gray-400 m-2 border-solid w-72"
    >
      <img
        className="w-full h-40"
        src={ image }
        alt={ `${title} cover` }
      />
      <div className="space-y-4 h-72 p-5">
        <h2 className="text-xl font-semibold">{ title }</h2>
        <h3>{ genres }</h3>
        <p className="text-sm text-justify">{ plot }</p>
      </div>
      <div className="flex justify-end items-center h-10 px-3.5 bg-gray-500">
        <Rating rating={ imDbRating } />
      </div>
    </div>
  );
}

MovieCard.propTypes = { movieId: PropTypes.string.isRequired };
