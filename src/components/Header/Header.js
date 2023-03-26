import React, { useState } from "react";
import "./Header.css";
import headerImage from "../../assets/img/Bitmap.png";
import { createSearchParams, useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/movies/${query}`);
  };
  const backgroundImageStyle = {
    backgroundImage: `url("${headerImage}")`,
    backgroundSize: "cover",
  };
  return (
    <div>
      <div className=" h-[100%] text-white" style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className=" grid max-w-xl grid-cols-1 gap-8">
            <h2 className="text-xl font-bold uppercase">
              Become a Movie Lover
            </h2>
            <h1 className="text-6xl font-bold">
              Host your space, share your world
            </h1>
            <form onSubmit={handleSearch}>
              <label
                for="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  id="default-search"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search your movies"
                  required
                />
                <button
                  type="submit"
                  className="text-md absolute right-2.5 bottom-2.5 rounded-md bg-gradient-to-r from-pink-600 to-orange-600 py-1 px-6"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
