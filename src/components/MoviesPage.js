import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.path}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
