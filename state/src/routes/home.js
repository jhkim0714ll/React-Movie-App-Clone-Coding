import "./Home.css";
import React from "react";
import axios from "axios";
import Movie from "./movie";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.state({ isLoading: false });
  //   }, 6000);
  // }
  getMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
      this.setState({ movies, isLoading: false });
    } catch (err) {}
  };

  async componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movie } = this.state;
    return (
      <selection className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div>
            {movie.map((movie) => (
              <Movie
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </selection>
    );
  }
}

export default Home;
