import Movie from "@/app/core/Movie"
import { useState } from "react"
import Input from "./input"
import Button from "../button"
import { formatDate, formatDateToInput } from "@/app/utils/converters"

interface FormProps {
    movie: Movie
    movieChanged?: (movie: Movie) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {
    const id = props.movie?.movie_id;
    const [title, setTitle] = useState(props.movie?.title);
    const [genre, setGenre] = useState(props.movie?.genre);
    const [rating, setRating] = useState(props.movie?.rating);
    const [releaseDate, setReleaseDate] = useState(props.movie?.releaseDate);

    return (
        <div>
            {/* Id */}
            {id ? (<Input texto="id" valor={(id)} readOnly />) : false}

            {/* Title */}
            <Input texto="Title" valor={title} onChange={setTitle} />

            {/* Release Date */}
            <Input texto="Release Date" tipo="date" valor={formatDateToInput(releaseDate)} onChange={setReleaseDate} />

            {/* Genre */}
            <Input texto="Genre" tipo="text" valor={genre} onChange={setGenre} />

            {/* Rating */}
            <Input texto="Rating" tipo="number" valor={rating} onChange={setRating} />

            <div className="flex justify-end mt-5" >

                {/* Edit/Save */}
                <Button
                    onClick={() => props.movieChanged?.(new Movie(id, title, genre, rating, releaseDate))}
                    className="mr-3"
                    cor="bg-gradient-to-r from-blue-500 to-blue-700" >
                    {id ? 'Edit' : 'Save'}
                </Button>

                {/* Cancel */}
                <Button
                    onClick={props.canceled}
                    cor="bg-gradient-to-r from-gray-500 to-gray-700" >
                    Cancel
                </Button>
            </div>
        </div >
    )
}