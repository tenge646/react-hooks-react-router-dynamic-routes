import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movieId } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));

  return (
    <div>
      {selectedMovie ? (
        <div>
          <h3>{selectedMovie.title}</h3>
         
        </div>
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  );
}

export default MovieShow;
