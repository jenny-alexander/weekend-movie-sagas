import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'

function AddMovie() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Add Movie</h1>
            <section className="add-movies">

            </section>
        </main>

    );
}

export default AddMovie;