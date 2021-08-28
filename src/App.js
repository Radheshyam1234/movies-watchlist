import React, {createContext } from "react";
import { useReducer } from "react";
import { initialState,reducer } from "./useReducer";
import {Route,Switch} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Watchlist from './components/Watchlist/Watchlist'
import Watched from './components/WatchedMovies/Watchedmovies'
import Add from './components/Add/Add'
export const UserContext=createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    
    <UserContext.Provider value={{state:state,dispatch:dispatch}}>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Add}/>
<Route exact path='/watchlist' component={Watchlist}/>
<Route exact path='/watched' component={Watched}/>
<Route exact path='/add' component={Add}/>
    </Switch>

    </UserContext.Provider>
   
    
  );
}

export default App;
