import axios from "./axios";
import { useEffect, useState } from "react";
import "./Row.css";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

interface Movies {
  poster_path: string | null;
  backdrop_path: string | null;
  id: number;
  name: string;
}

function Row({ title, fetchUrl, isLargeRow = false }: RowProps) {
  const [movies, setMovies] = useState<Movies[] | []>([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster && ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
