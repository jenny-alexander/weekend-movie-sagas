import React, { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './MovieDetails.css'

function MovieDetails(props) {

    const movieDetails = useSelector(store => store.movieDetails);

    return (
        <main>
            <h1>MovieDetails</h1>
            <section className="movie-details">
                <ul>
                    <li>Title: {movieDetails.title}</li>
                    <img src={movieDetails.poster} alt={movieDetails.title}></img>
                    <li>Description: {movieDetails.description}</li>
                </ul>
            </section>
            <br></br>
            <Link to='/'>
                <button>Back to Movie List</button>
            </Link>
        </main>

    );
}

export default MovieDetails;