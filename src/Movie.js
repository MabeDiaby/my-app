import React from 'react';

function Movie(props) {
    return (
        <div className="movie">
            <h4> {props.movieObj.release_date}</h4>
            <h2>{props.movieObj.title}</h2>
            <img
                src= {props.movieObj.poster}
                alt = "movie poster"
            />
            <p>{props.movieObj.summary}</p>
        </div>
    );
}

export default Movie;