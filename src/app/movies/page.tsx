"use client";
import { useState } from "react";
import Button from "../components/button";
import Form from "../components/movies/form";
import Layout from "../components/movies/layout";
import Table from "../components/movies/table";
import Movie from "../core/Movie";

export default function Movies() {
  const movies = Movie.generateMoviesMock();
  const [show, setShow] = useState<'table' | 'form'>('table');
  const [movie, setMovie] = useState<Movie>(Movie.empty());

  function storeMovie(movie: Movie) {
    console.log(movie);
    setShow("table");
  }

  /**
   * Button add movie.
   */
  function addMovie() {
    setMovie(Movie.empty())
    setShow("form");
  }

  function selectedMovie(movie: Movie) {
    console.log(movie);
    setMovie(movie);
    setShow("form");
  }

  function deletedMovie(movie: Movie) {
    console.log(movie);
  }

  return (
    <div className="bg-gray-200">
      <div className={`flex justify-center items-center h-screen`}>
        <Layout titulo="Movies">

          {show == "table" ? (
            <>

              {/* Button */}
              <div className="flex justify-end">
                <Button
                  onClick={() => addMovie()}
                  className="mb-4"
                  cor="bg-gradient-to-r from-indigo-500 to-indigo-700">
                  Add Movie
                </Button>
              </div>

              {/* Table */}
              <Table
                movies={movies}
                selectedMovie={selectedMovie}
                deletedMovie={deletedMovie}
              ></Table>

            </>
          ) : (
            <>
              {/* Form */}
              <Form
                movie={movie}
                movieChanged={storeMovie}
                canceled={() => setShow("table")}
              ></Form>
            </>
          )}

        </Layout>
      </div>
    </div>
  );
}
