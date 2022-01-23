import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import fetchApi from '../services/fetchApi';

export default function MovieCard({ movieId }) {
  const [movieInfo, setMovieInfo] = useState({});
  const { image, title, genres, stars, imDbRating } = movieInfo;

  useEffect(() => {
    fetchApi(movieId, setMovieInfo);
    
  }, [movieId]);
  
  return (
    <div
      className="flex flex-col justify-between border border-gray-400 m-2 border-solid w-72"
    >
      <div
        className="space-y-4 h-96 p-5 bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2
          className="rounded-full text-xl font-semibold text-center bg-white bg-opacity-50 "
        >
          { title }
        </h2>
        <h3 className="rounded-full bg-white bg-opacity-50 p-2.5">{ genres }</h3>
        <p
          className="rounded-full text-sm text-justify bg-white bg-opacity-50 p-2.5"
        >
          { stars }
        </p>
      </div>
      <div className="flex justify-end items-center h-10 px-3.5 bg-gray-500">
        <Rating rating={ imDbRating } />
      </div>
    </div>
  );
}

MovieCard.propTypes = { movieId: PropTypes.string.isRequired };
