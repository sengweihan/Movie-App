import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const API_URL = "http://www.omdbapi.com?apikey=10adcacc";

  const searchMovie = async (title) => {
    const responses = await fetch(API_URL + `&s=${title}`);
    const data = await responses.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovie("");
  }, []);

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
        <BiSearch class="text-orange-500 text-2xl" />
      </div>
    </div>
  );
}

export default App;
