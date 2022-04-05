import React from 'react';
import Movie from './Movie';

function Movies(props) {

    return (
        <section>
            <div>
            <h2>Now Playing</h2>
            {props.movies.map(movie => {
                return <Movie movieObj={movie} />
                })
            }
        </div>
            {/* <Movie movieObj={props.movies[0]} /> */}
        </section>
    );
}

export default Movies;