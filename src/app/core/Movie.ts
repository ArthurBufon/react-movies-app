export default class Movie {
    id: number | null;
    title: string;
    genre: string;
    rating: number;
    releaseDate: string;
    movie_id: number;
    constructor(
        id: number | null,
        title: string,
        genre: string,
        rating: number,
        releaseDate: string,
        movie_id: number) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.releaseDate = releaseDate;
        this.movie_id = movie_id;
    }

    static generateMoviesMock() {
        return [
            new Movie(
                1,
                "Cool movie",
                "Adventure",
                8.1,
                "2023-10-31T03:00:00.000+00:00",
                9,
            ),
            new Movie(
                2,
                "Another Cool movie",
                "Comedy",
                9.3,
                "2023-10-31T03:00:00.000+00:00",
                12,
            ),
            new Movie(
                3,
                "Bad Movie",
                "Comedy",
                6.2,
                "2023-10-31T03:00:00.000+00:00",
                5,
            )
        ]
    }
}