import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const BASE_URL = "https://yts-proxy.now.sh/";
const API_MOIVE_LIST = "list_movies.json";

class Home extends React.Component {
  state = {
    isLoading: true,
    movieList: []
  }

  getMovies = async () => {
    const { 
      data : { 
        data : {
          movies: movieList
        }
      }
    } = await axios.get(BASE_URL + API_MOIVE_LIST + "?sort_by=rating");
    this.setState({movieList, isLoading : false});
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    const { isLoading, movieList } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
              <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movieList.map(movie => (
              <Movie 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                rating={movie.rating}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
          
      </section>
    )
  }
}

export default Home;