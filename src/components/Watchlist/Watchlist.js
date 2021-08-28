import React,{useEffect,useState} from 'react'
import './Watchlist.css'
import { useContext } from 'react'
import { UserContext } from '../../App'

const Watchlist = () => {
    const{state,dispatch}=useContext(UserContext);
    
    useEffect(()=>{
      localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
      localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state])
    
   
    const removeFromWatchlist= (movie)=>{
      const newMovieList= state.watchlist.filter((o)=>{return(o.id!==movie.id)})
      dispatch({type:"REMOVE_FROM_WATCHLIST",payload:newMovieList})
    }

    const addToWatched=(movie)=>{
     dispatch({type:"ADD_TO_WATCHED",payload:movie})
    }

   

    return (<>
    
     <div className="movieList">
      { state.watchlist? state.watchlist.map((movie)=>{

        return(
          <>
         <div className="card" >

            <img className="card-img-top" 
            src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
            alt={`${movie.title} Poster`} />

            <div class="card-body">
              <h4 className="card-title">{movie.title}</h4>
            
            </div>
            <div className="card-footer">
              <button className="btn btn-danger " onClick={()=>{removeFromWatchlist(movie)}}>Remove</button>
              {
                state.watched ? (state.watched.find(o=>o.id===movie.id)?
                <button className="btn btn-info" disabled>Add to watched</button>
                :
                <button className="btn btn-info" onClick={()=>{addToWatched(movie)}}>Add to watched</button>)
                :""
              }
             
            </div>
            </div>
            
          </>
        )
      })
      :""
        
  }
  </div>
 
</>
    )
}

export default Watchlist
