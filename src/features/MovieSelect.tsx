import React from 'react';
import { useMovieSelect } from './useMovieSelect';

export const MovieSelect = () => {
  const { movieSuggestions } = useMovieSelect();

  return (
    <ul>
      {movieSuggestions.map((suggestedMovie) => (
        <li>{suggestedMovie.title}</li>
      ))}
    </ul>
  );
};
