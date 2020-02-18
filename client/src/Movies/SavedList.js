import React from 'react';
import {Route,Link} from 'react-router-dom';
import MovieList from "./MovieList";


const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    
    <Link 
    className = "home-button"
    to = {`/`}>Home
    
    </Link>
     
    
  </div>
);

export default SavedList;
//<div className="home-button">Home</div>
