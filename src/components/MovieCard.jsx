import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default function MovieCard({ movie }) {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  
  return (
    <div
      className="flex flex-col justify-between border border-gray-400 m-2 border-solid w-72"
    >
      <img
        className="w-full h-40"
        src={ imagePath }
        alt={ `${title} cover` }
      />
      <div className="space-y-4 h-72 p-5">
        <h2 className="text-xl font-semibold">{ title }</h2>
        <h3>{ subtitle }</h3>
        <p className="text-sm text-justify">{ storyline }</p>
      </div>
      <div className="flex justify-end items-center h-10 px-3.5 bg-gray-500">
        <Rating rating={ rating } />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
