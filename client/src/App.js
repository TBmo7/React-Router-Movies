import React, { useState } from 'react';
import {Route} from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route 
        path = '/' 
        exact component = {MovieList} />
        <Route 
        path = '/movies/:id' 
        component = {Movie}
        //render = {props => <Movie {...props} movielist = {MovieList}/>}
        //^^ instead of a component, we render a function, and pass in movielist as props
        //this should let us route to a list of moveis from the server
        />
        
      </div>
    </div>
  );
};

export default App;
