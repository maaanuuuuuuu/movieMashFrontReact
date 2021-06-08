import { useState, useEffect } from 'react';
import { IMovie } from '../model';

export const useMovieSelect = () => {
  const [movieSuggestions, setMovieSuggestions] = useState<IMovie[]>([]);

  const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  const getMovieSuggestions = async () => {
    const res:Response = await fetch(api, {
      method: 'GET',
    });
    const json = await res.json();
    return json.results.map((result: { title: string; }) => ({ title: result.title }));
  };

  useEffect(() => {
    (async () => {
      const movies = await getMovieSuggestions();
      console.log(movies);
      setMovieSuggestions(movies);
    })();
  }, []);

  return { movieSuggestions };
};
