// src/components/MoviesList.jsx

import React, {useState} from 'react';

const MoviesList = () => {
    // Task 1: Initialize state with a list of movies
    const [movies, setMovies] = useState([
        {id: 1, title: 'Inception', genre: 'Action', description: 'A thief who steals corporate secrets.'},
        {id: 2, title: 'The Shawshank Redemption', genre: 'Drama', description: 'Two imprisoned men bond over years.'},
        {id: 3, title: 'The Dark Knight', genre: 'Action', description: 'Batman faces the joker in Gothem.'},
        {id: 4, title: 'Forrest Gump', genre: 'Drama', description: 'The history of a man with low IQ.'},
        
        ]);

        // State to toggle between all movies and only action movies
        const [viewActionMovies, setViewActionMovies] = useState(false);

        // Task 2: State for tracking visible movie descriptions
        const [visibleMovieIds, setVisibleMovieIds] = useState([]);

        // Task 2: Toggle visibility of movies descriptions

        const toggleDescription = (id) => {
            if (visibleMovieIds.includes(id)) {
                setVisibleMoviesIds(visibleMovieIds.filter(movieId => MovieId !== id));

            } else {
                setVisibleMovieIds([...visibleMovieIds, id]);

            }
        };

        // Task 3: Remove movie from list
        const removeMovie = (id) => {
            setMovie(movie.filter(movie => movie.id !== id));
        };

        // Task 4: Toggle between all movies and action movies 
        const toggleView = () => {
            setViewActionMovies(!viewActionMovies);
        };

        // filter movies based on the toggle view state
        const displayedMovies = viewActionMovies ? movies.filter(movie => movie.genre === 'Action'): movies;

        return (
            <div>
                {/* Task 4: Button to toggle between all movies and action movies */}
                <button onClick={toggleView}>
                    {viewActionMovie ? 'Show All Movie' : 'Show Action Movies'}
                </button>

                {/* Task 1: Display list of movies */}
                <u1>
                    {displayedMovies.map(movie => (
                        <li key={movie.id}>
                            <span onClick={() => toggleDescription(movie.id)} style={{ cursor: 'pointer', fontWeight: 'bold'}}>{movie.title}
                            
                            </span>

                            {/* Task 2: Show or hide movie description */}
                            {visibleMovieIds.includes(movie.id) && (
                                <p>{movie.description}</p>
                            )}

                            {/* Task 3: Remove button */}
                            <button onClick={() => removeMovie(movie.id)}>Remove</button>
                        </li>

                    ))}
                </u1>
            </div>
                
        );

};

export default MoviesList;
