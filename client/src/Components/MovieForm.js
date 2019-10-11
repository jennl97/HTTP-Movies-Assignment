import React, { useState, useEffect }from 'react';
import axios from 'axios';


const initialMovie = {
    title: "",
    director: "",
    metascore: "",
    stars: []
}


const MovieForm = props => {
    console.log(props);

    const[movie, setMovie] = useState(initialMovie);

    const movieId = props.match.params.id;
    console.log(movieId);

    // const movieToUpdate = props.movies.find(movie => {
    //     console.log(movie.movieId, movieId);
    //     return `${movie.movieId}` === movieId
    // });
    // console.log(movieToUpdate);

    return(
        <div  className="update-form">
            <form>
                <input
                    type="text"
                    name="name"
                    // onChange={}
                    placeholder="Movie Title"
                    value={movie.name}
                />
            
                <input 
                    type="text"
                    name="director"
                    // onChange={}
                    placeholder="Director"
                    value={movie.director}            
                />
                <input 
                    type="number"
                    name="metascore"
                    // onChange={}
                    placeholder="Metascore"
                    value={movie.actors}
                />
                <input 
                    type="text"
                    name="actors"
                    // onChange={}
                    placeholder="Actor Names, separated by a comma"
                    value={movie.stars}
                />
                <button>Submit Update</button>
            </form>
        </div>
    )
}

export default MovieForm;