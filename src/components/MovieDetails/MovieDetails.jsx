import React, { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './MovieDetails.css'

function MovieDetails(props) {

    const movieDetails = useSelector(store => store.movieDetails);

    return (
        <main>
            <section className="movie-details">
                <ul>
                    <li id="movie-title">{movieDetails.title}</li>
                    <img id="image" src={movieDetails.poster} alt={movieDetails.title}></img>
                    <li id="desc">{movieDetails.description}</li>
                </ul>
            </section>
            <br></br>
            <Link to='/'>
                <button id="back-btn">Back to Movie List</button>
            </Link>
        </main>

    );
}

export default MovieDetails;