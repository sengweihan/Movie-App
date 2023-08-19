import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Card from "./Card";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [sendMovieTitle, setSendMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const API_URL = "http://www.omdbapi.com?apikey=10adcacc";

  const fetchMovies = async () => {
    const responses = await fetch(
      API_URL + `&s=${sendMovieTitle ? sendMovieTitle : "batman"}`
    );
    const data = await responses.json();
    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [sendMovieTitle]);

  const handleSearch = () => {
    setSendMovieTitle(movieTitle);
  };

  return (
    <div>
      <h1 class="font-mono text-2xl tracking-wider text-center">My Contacts</h1>
      <div class="flex gap-x-3 justify-center items-center">
        <input
          type="text"
          placeholder="Enter a movie name"
          name="movie-title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <BiSearch onClick={handleSearch} />
      </div>

      <div class="grid grid-cols-3 gap-4 mt-5">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return (
              <Card
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            );
          })
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
}

export default App;
