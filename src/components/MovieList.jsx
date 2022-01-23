import React, { useEffect, useState } from 'react';
import fetchApi from '../services/fetchApi';
import MovieCard from './MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchApi(null, setMovies);
  }, []);

  return (
    <div className="flex flex-wrap pt-10 px-16 justify-center">
      { movies && movies.filter((_movie, index) => index < 10)
        .map(({ id }) => <MovieCard key={ id } movieId={ id } />) }
    </div>
  );
}
