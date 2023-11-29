import { formatDateToInput } from "../utils/converters";

export default class Movie {
    movie_id: number | null;
    title: string;
    genre: string;
    rating: number | null;
    releaseDate: string;
    constructor(
        movie_id: number | null,
        title: string,
        genre: string,
        rating: number | null,
        releaseDate: string) {
        this.movie_id = movie_id;
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.releaseDate = releaseDate;
    }

    static generateMoviesMock() {
        return [
            new Movie(
                1,
                "Cool movie",
                "Adventure",
                8.1,
                "2015-01-02",
            ),
            new Movie(
                2,
                "Another Cool movie",
                "Comedy",
                9.3,
                "2020-12-25",
            ),
            new Movie(
                3,
                "Bad Movie",
                "Comedy",
                6.2,
                "2023-10-07",
            )
        ]
    }

    static empty(): Movie {
        return new Movie(null, "", formatDateToInput(""), null, "");
    }
}