import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, rating, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h4 className="movie__rating">{rating}</h4>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{genres.map((genre, index) => <li className="movie__genre" key={index}>{genre}</li>)}</ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.prototype = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;