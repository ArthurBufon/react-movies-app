import Layout from "../components/movies/layout";
import Table from "../components/movies/table";
import Movie from "../core/Movie";

export default function Movies() {
    const movies = Movie.generateMoviesMock();

    return (
        <div className="bg-gray-200">
            <div className={`flex justify-center items-center h-screen`}>

                <Layout titulo="Movies">
                    <Table movies={movies}></Table>
                </Layout>
            </div>
        </div>
    )
}