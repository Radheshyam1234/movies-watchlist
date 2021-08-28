export const initialState={
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')):[] ,
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')):[] ,
}


export const reducer =(state,action)=>{
   
    if(action.type==="ADD_TO_WATCHLIST"){
        return{
           ...state,
          watchlist:[...state.watchlist,action.payload]

        }
    }
    if(action.type==="REMOVE_FROM_WATCHLIST"){
        return{
            ...state,
            watchlist:action.payload
        }
    }

    if (action.type==="ADD_TO_WATCHED"){
        return{
            ...state,
            watched:[...state.watched,action.payload]
        }
    }
    if(action.type==="REMOVE_FROM_WATCHED"){
        return{
            ...state,
            watched:action.payload
        }
    }
    
   return state
}

