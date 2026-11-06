import { useState } from 'react';
import './App.css';

function App() {
  const [movies, movieman] = useState(["Movie 1", "Movie 2", "Movie 3"]);

  const addMovie = () => {
    const newMovie = document.getElementById("moviename").value;
    if (newMovie) {
      movieman([...movies, newMovie]);
    }
  };

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie}
            <button onClick={() => movieman(
              movies.filter((movie, i) =>
              i !== index))
            }>
                Remove
              </button>
          </li>
        ))}
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Add Movie" id="moviename" />
            <button onClick={addMovie}>Add Movie</button>
          </form>
        </div>
      </ul>
    </div>
  );
}

export default App;