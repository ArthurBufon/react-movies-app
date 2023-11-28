import Movie from "@/app/core/Movie";
import { DeleteIcon, EditIcon } from "../icons/table";

interface TabelaProps {
    movies: Movie[]
}

export default function Table(props: TabelaProps) {

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">title</th>
                <th className="text-left p-3">genre</th>
                <th className="text-left p-3">rating</th>
                <th className="text-left p-3">releaseDate</th>
                <th className="p-3">actions</th>
            </tr>
        );
    }

    function renderBody() {
        return props.movies?.map((movie, i) => {
            return (
                <tr key={movie.id} className={`${i % 2 === 0 ? 'bg-gray-100' : ''} `}>
                    <td className="text-left p-3">{movie.id}</td>
                    <td className="text-left p-3">{movie.title}</td>
                    <td className="text-left p-3">{movie.genre}</td>
                    <td className="text-left p-3">{movie.rating}</td>
                    <td className="text-left p-3">{movie.releaseDate}</td>
                    {renderActions(movie)}
                </tr>
            );
        });
    }

    function renderActions(movie: Movie) {
        return (
            <td className="flex">

                {/* Edit */}
                <button className={`flex justify-center items
                text-indigo-500 rounded-full p-2 m-1
                hover:bg-gray-100`}>
                    {EditIcon}
                </button>

                {/* Delete */}
                <button className={`flex justify-center items
                text-red-600 rounded-full p-2 m-1
                hover:bg-gray-100`}>
                    {DeleteIcon}
                </button>

            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gray-300">
                {renderHeader()}
            </thead>

            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
}