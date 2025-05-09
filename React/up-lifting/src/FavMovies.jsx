import React, { useState } from 'react';
import { List, ListItem, Button, ListItemText } from '@mui/material';

const ParentMovieList = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Baahubali', isFavorite: false },
    { id: 2, title: 'RRR', isFavorite: false },
    { id: 3, title: 'Hello', isFavorite: false },
    { id: 4, title: 'Magadheera', isFavorite: false },
    { id: 5, title: 'Eega', isFavorite: true }
  ]);

  const toggleFavorite = (movieId) => {
    setMovies(movies.map(movie =>
      (movie.id === movieId) ? { ...movie, isFavorite: !movie.isFavorite }: movie
    ));
  };

  return (
    <div>
        <h1>11. Movie List with Favorite Functionality</h1>
        <h1>List of Movies</h1>
        <List>
            {movies.map(movie => (
                <ChildMovieItem
                 key={movie.id}
                 movie={movie}
                 toggleFavorite={toggleFavorite}
             />
            ))}
        </List>
    </div>
  );
};

const ChildMovieItem = ({ movie, toggleFavorite }) => {
  return (
    <ListItem>
      <ListItemText primary={movie.title} />
      <Button
        variant="contained"
        color={movie.isFavorite ? 'secondary' : 'primary'}
        onClick={() => toggleFavorite(movie.id)}
      >
        {movie.isFavorite ? 'Unfavorite' : 'Favorite'}
      </Button>
    </ListItem>
  );
};

export default ParentMovieList;
