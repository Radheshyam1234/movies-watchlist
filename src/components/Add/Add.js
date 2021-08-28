import React,{useState,useEffect,useContext} from 'react'
import Moviecard from '../Moviecard/Moviecard'
import { UserContext } from '../../App'
import './Add.css'




const  Add = () => {
    const {state,dispatch}=useContext(UserContext)
    const[search,setSearch]=useState("");
    const[movies,setMovies]=useState([])

  const onchange=(e)=>{
      e.preventDefault();
      setSearch(e.target.value)
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`)
          .then(res=>res.json())
          .then(result=>{
              setMovies(result.results)
              console.log(result)
          })
  }

    return (
        <div className="add_page">
            <div className="container">
                <div className="add_content">
                    <input type="text"
                    placeholder="Search for a movie"
                    value={search}
                    onChange={(e)=>{onchange(e)}}
                    />
                   
                </div>
                <div className="movieList">
                    { movies?
                        movies.map(movie=>{
                            return(
                                <>
                               <Moviecard key="movie._id" movie={movie}/>
                                </>
                            )
                        })
                        :"Type to get result"
                    }
                </div>
            </div>
        </div>
    )
}


export default Add;
