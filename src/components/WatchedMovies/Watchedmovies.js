import React,{useContext,useEffect} from 'react'
import { UserContext } from '../../App'

const Watchedmovies = () => {
    const{state,dispatch}=useContext(UserContext);
    
    useEffect(()=>{
      localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
      localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state])
    

  const removeFromWatched= (movie)=>{
      const newMovieList= state.watched.filter((o)=>{return(o.id!==movie.id)})
     dispatch({type:"REMOVE_FROM_WATCHED",payload:newMovieList})
     
    
  }
  const addToWatchList=(movie)=>{
    console.log(movie);
    dispatch({type:"ADD_TO_WATCHLIST",payload:movie})
   
  }

   
    return (
        <div className="movieList">
         { state.watched? state.watched.map((movie)=>{
   
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
              <button className="btn btn-danger" onClick={()=>{removeFromWatched(movie)}}>Remove</button>
              {
                 state.watchlist? state.watchlist.find(o=>o.id===movie.id)?
                  <button className="btn btn-info" disabled >Add to watchlist</button>
                  :
                  <button className="btn btn-info" onClick={()=>{addToWatchList(movie)}} >Add to watchlist</button>
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
    
   
       )
}

export default Watchedmovies