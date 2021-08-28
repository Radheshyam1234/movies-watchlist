import React,{useEffect} from 'react'
import { UserContext } from '../../App'
import { useContext } from 'react'
import './Moviecard.css'

const Moviecard = ({movie}) => {
  const{state,dispatch}=useContext(UserContext);
  
  useEffect(()=>{
    localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
    localStorage.setItem('watched',JSON.stringify(state.watched))
  },[state])
  
  const addToList= ()=>{
    console.log(movie);
   dispatch({type:"ADD_TO_WATCHLIST",payload:movie})
  }

  const addToWatched=(movie)=>{
  dispatch({type:"ADD_TO_WATCHED",payload:movie})
  }
  
    return (
        
<div className="card" >

    <img className="card-img-top" 
    src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
     alt={`${movie.title} Poster`} />

    <div class="card-body">
      <h4 className="card-title">{movie.title}</h4>
      <p className="card-text">{movie.release_date?movie.release_date.substring(0,4):""}</p>
     
      <div className="card-footer">
      {
        state.watchlist? state.watchlist.find(o=>o.id===movie.id)?
        <button className="btn  btn-success" disabled >Add to watchlist</button>
        :
        <button className="btn  btn-success" onClick={()=>{addToList(movie)}}>Add to watchlist</button>
        :""
        
      }
      
      { state.watched ? state.watched.find(o=>o.id===movie.id)?<button className="btn  btn-success" disabled >Add to watched</button>
      :
        <button className="btn btn-success" onClick={()=>{addToWatched(movie)}}>Add to watched</button>
        :""
      }
      </div>
    </div>
  </div>
 
    )
}

export default Moviecard;
