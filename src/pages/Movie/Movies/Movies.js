import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import headerImage from "../../../assets/img/Bitmap.png";
function Movies(props) {
  const navigate = useNavigate();
  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const backgroundImageStyle = {
    backgroundImage: `url("${headerImage}")`,
    backgroundSize: "cover",
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://cinecritique.cyclic.app/movie/name/${query}`)
      .then((res) => {
        // console.log(res.data.data.data.Error);
        if (res.data.data.data.Error === "Movie not found!") {
          setMovies([]);
        } else {
          setMovies(res.data.data.data);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setLoading(false);
      });
  }, [query]);
  //console.log(movies);
  return (
    <div>
      <div
        className="flex h-[100%] min-h-screen flex-col justify-center bg-gray-100 py-6 text-white sm:py-12"
        style={backgroundImageStyle}
      >
        {loading && (
          <div className="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="mr-2 inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {movies.length === 0 ? (
          <div className="py-1 sm:mx-auto sm:max-w-xl">
            <h1 className="text-a flex rounded-xl p-2  text-2xl font-bold text-gray-800">
              Movie not found!{" "}
            </h1>
          </div>
        ) : (
          <div className="py-1 sm:mx-auto sm:max-w-xl">
            <h1 className="text-a flex rounded-xl p-2  text-2xl font-bold text-gray-800">
              Search Found:{" "}
            </h1>
            <div className="max-h-180 flex space-x-8 border border-gray-100 bg-white p-8 shadow-lg sm:rounded-3xl">
              <div className="w-2/2 h-48  overflow-visible shadow-lg">
                <img
                  className="rounded-3xl shadow-lg"
                  src={movies.Poster}
                  alt={movies.Title}
                />
              </div>
              <div className="h-5/5 flex w-2/4 flex-col space-y-1">
                <div className="flex items-start justify-between">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {movies.Title}
                  </h2>

                  <div className="rounded-xl bg-yellow-400 p-2 font-bold">
                    {movies.imdbRating}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">
                    {movies.Type} / {movies.Genre}
                  </div>
                  <div className="text-lg text-gray-800">{movies.Year}</div>
                </div>

                <p className="h-50 overflow-y text-gray-400">
                  {movies.Plot.slice(0, 75)}...
                </p>
                <p className=" max-h-30 p-2  text-gray-600">
                  <p className=" text-xl font-semibold text-gray-800">
                    {" "}
                    Actors:
                  </p>
                  {movies.Actors}
                </p>
                <p className=" max-h-30 p-2  text-gray-600">
                  <p className=" text-xl font-semibold text-gray-800">
                    {" "}
                    Director:
                  </p>

                  {movies.Director}
                </p>

                <div className="text-a flex rounded-xl p-2  text-2xl font-bold text-gray-800">
                  {movies.BoxOffice}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
