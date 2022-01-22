import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
 return (
    <div className="flex flex-wrap">
      { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
