import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieDetails.css'

function MovieDetails() {

    // const dispatch = useDispatch();
    // const movies = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    const backToMovieList=()=>{
        console.log(`Going back to list`);
    }

    return (
        <main>
            <h1>MovieDetails</h1>
            <section className="movie-details">
                <button onClick={backToMovieList}>Back to Movie List</button>
            </section>
        </main>

    );
}

export default MovieDetails;