import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className = "add-movie">
                <Link to='/add'><button id="btn-add-movie">Add a movie</button></Link>
            </section>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div id="movie" key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to='/details'>
                                <img src={movie.poster} alt={movie.title} 
                                     onClick={ ()=>dispatch( {type: 'FETCH_MOVIE_DETAILS', payload: movie } )}/>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;