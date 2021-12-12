import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AddMovie.css'

function AddMovie() {
    // const [ newMovie, setNewMovie]=useState ( {
    //     title: 'The Birds',
    //     poster: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Birds_original_poster.jpg',
    //     description: 'Could have been the terrifying motion picture I have ever made - Hitchcok',
    //     genre_id: ''
    // } );
    const [ newMovie, setNewMovie]=useState ( {} );
    const dispatch = useDispatch();

    //we want to get the genres from the store
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const handleGenreChange=(event)=>{
        setNewMovie({...newMovie, genre_id: event.target.value});
    }

    return (
        <main>
            <h1>Add Movie</h1>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-15">
                                <label for="title">Title:</label>
                            </div>
                            <div className="col-85">
                                <input type="text" id="title" name="title" value={newMovie.title}
                                       onChange={(e)=>setNewMovie({...newMovie, title: e.target.value })} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-15">
                                <label for="poster">Poster:</label>
                            </div>
                            <div className="col-85">
                                <input type="text" id="poster" name="poster" value={newMovie.poster}
                                       onChange={(e)=>setNewMovie( {...newMovie, poster: e.target.value })} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-15">
                                <label for="desription">Description</label>
                            </div>
                            <div className="col-85">
                                <textarea id="description" name="description" value={newMovie.description}
                                          onChange={(e)=>setNewMovie({...newMovie, description: e.target.value })} required></textarea>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-15">
                                <label for="genre_id">Genre</label>
                            </div>
                            <div className="col-85">
                                {/* <select id="genre" name="genre" onChange={(e)=>setNewMovie({...newMovie, genre_id: e.target.value})}> */}
                                <select id="genre" name="genre" onChange={(e)=>handleGenreChange(e)}>
                                    { 
                                        genres.map( genres =>{
                                        return ( 
                                            <option value={genres.id} >
                                                {genres.name}
                                            </option> 
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <button className="button" onClick={ ()=>dispatch( {type: 'ADD_MOVIE', payload: newMovie } )}>Add movie!</button>
                            <Link to='/'><button className="button">Cancel</button></Link>
                        </div>
                    </form>
                </div>
        </main>

    );
}

export default AddMovie;