import {GET_USER, ADD_USER, UPDATE_USER } from '../actions/types'

const initialState = {
    items : [ ]
}

export default function(state=initialState ,action){
    switch(action.type){
        case GET_USER : return {
            ...state,
            items : state.items.filter(item=>item._id ===action.payload)
        }
        case ADD_USER:
            return{
            ...state,
            items : [action.payload, ...state.items]
            }

         case UPDATE_USER :
             return{
             ...state,
            items : [action.payload, ...state.items]
                        }
                
                
        default: return state;
    }
}