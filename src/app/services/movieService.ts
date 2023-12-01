import axios from 'axios';
import Movie from '../core/Movie';

let moviesList: Movie[] = [
    new Movie(1, "The Dark Knight", "Action", 8.1, "2012-05-01"),
    new Movie(2, "Spider-Man", "Action", 9.3, "2021-11-15"),
    new Movie(3, "Pulp Fiction", "Crime", 6.2, "1994-04-07"),
    new Movie(4, "Inception", "Sci-Fi", 8.8, "2010-07-16"),
    new Movie(5, "The Shawshank Redemption", "Drama", 9.3, "1994-09-23"),
    new Movie(6, "The Godfather", "Crime", 9.2, "1972-03-24"),
    new Movie(7, "The Matrix", "Sci-Fi", 8.7, "1999-03-31"),
    new Movie(8, "Forrest Gump", "Drama", 8.8, "1994-07-06"),
    new Movie(9, "The Lord of the Rings: The Fellowship of the Ring", "Adventure", 8.8, "2001-12-19"),
    new Movie(10, "The Silence of the Lambs", "Thriller", 8.6, "1991-02-01")
]

let nextId = moviesList.length + 1;

/**
 * 
 * Returns array with all movies.
 * 
 * @returns Movie[]
 */
export const fetchAll = async (): Promise<Movie[]> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return moviesList;
    } catch (error) {
        throw new Error('Error fetching movies!');
    }
};


/**
 * 
 * Store new movie.
 * 
 * @param newMovie 
 * @returns 
 */
export const store = async (newMovie: Movie): Promise<Movie> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        newMovie.movie_id = nextId++;
        moviesList.push(newMovie);
        return newMovie;
    } catch (error) {
        console.error("Error storing movie:", error);
        throw error;
    }
};

/**
 * 
 * @param editedMovie 
 * @returns 
 */
export const update = async (editedMovie: Movie): Promise<Movie> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const index = moviesList.findIndex((movie) => movie.movie_id === editedMovie.movie_id);
        if (index !== -1) {
            moviesList[index] = editedMovie;
            return editedMovie;
        } else {
            throw new Error('Movie not found!');
        }
    } catch (error) {
        console.error("Failed to update movie data:", error);
        throw error;
    }
};

export const destroy = async (id: number): Promise<void> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        moviesList = moviesList.filter((movie) => movie.movie_id !== id);
    } catch (error) {
        console.error("Failed to delete movie:", error);
        throw error;
    }
};