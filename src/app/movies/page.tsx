"use client";
import { useEffect, useState } from "react";
import Button from "../components/button";
import Form from "../components/movies/form";
import Layout from "../components/movies/layout";
import Table from "../components/movies/table";
import Movie from "../core/Movie";
import { destroy, fetchAll, store, update } from "../services/movieService";

export default function Movies() {
  // const movies = Movie.generateMoviesMock();
  const [show, setShow] = useState<'table' | 'form'>('table');
  const [movie, setMovie] = useState<Movie>(Movie.empty());
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (show == "table") {
      const loadEventos = async () => {
        try {
          const data = await fetchAll();
          setMovies(data);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
      loadEventos();
    }
  }, [show]);

  /**
   * 
   * Store new Movie
   * 
   * @param movie
   */
  async function storeMovie(movie: Movie) {
    try {
      const newMovie = await store(movie);
      setShow("table");
    } catch (error) {
      console.error("Failed to store movie:", error);
    }
  }

  /**
   * 
   * Handles create/update.
   * 
   * @param movie 
   * @returns void
   */
  function createOrUpdate(movie: Movie) {
    if (movie.movie_id == null) {
      return storeMovie(movie);
    }

    return updateMovie(movie);
  }

  /**
   * Button add movie.
   */
  function addMovie() {
    setMovie(Movie.empty())
    setShow("form");
  }

  /**
   * 
   * Selects movie(state).
   * 
   * @param movie 
   */
  function selectedMovie(movie: Movie) {
    setMovie(movie);
    setShow("form");
  }

  /**
   * 
   * Updates movie.
   * 
   * @param movie 
   */
  async function updateMovie(movie: Movie) {
    try {
      const updatedMovie = await update(movie);
      setShow("table");
    } catch (error) {
      console.error("Failed to update movie:", error);
    }
  }

  /**
   * 
   * Deletes movie.
   * 
   * @param movie 
   */
  async function deletedMovie(movie: Movie) {
    const confirmacao =
      window.confirm("Are you sure you want to delete the movie?");
    if (confirmacao) {
      try {
        if (movie.movie_id !== null) {
          await destroy(movie.movie_id);
        } else {
          console.error("Failed to delete movie!");
        }
        setMovies(previousMovies => previousMovies.filter(mv => mv.movie_id !== movie.movie_id));
      } catch (error) {
        console.error("Failed to delete movie:", error);
      }
    }
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
                movieChanged={createOrUpdate}
                canceled={() => setShow("table")}
              ></Form>
            </>
          )}

        </Layout>
      </div>
    </div>
  );
}
