"use client";
import Layout from "../components/movies/layout";
import Table from "../components/movies/table";
import Movie from "../core/Movie";

export default function Movies() {
  const movies = Movie.generateMoviesMock();

  function selectedMovie(movie: Movie) {
    console.log(movie);
  }
  
  function deletedMovie(movie: Movie) {
    console.log(movie);
  }

  return (
    <div className="bg-gray-200">
      <div className={`flex justify-center items-center h-screen`}>
        <Layout titulo="Movies">
          <Table
            movies={movies}
            selectedMovie={selectedMovie}
            deletedMovie={deletedMovie}
          ></Table>
        </Layout>
      </div>
    </div>
  );
}
