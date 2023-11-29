import Layout from "./components/movies/layout";

export default function Home() {
  return (

    <div className="bg-gray-200">
      <div className={`flex justify-center items-center h-screen`}>
        <Layout titulo="Movies App">
          <h1 className="text-center">Welcome!</h1>
        </Layout>
      </div>
    </div>
  )
}