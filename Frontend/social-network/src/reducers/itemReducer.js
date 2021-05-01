import {GET_USERS, ADD_USER, UPDATE_USER } from '../actions/types'

const initialState = {
    users : [ {
      } ]
}

export default function(state=initialState ,action){
    switch(action.type){
        case GET_USERS : return {
            ...state,
            users : [action.payload, ...state.users]
        }
        case ADD_USER:
            return{
            ...state,
            users : [action.payload, ...state.users]
            }

         case UPDATE_USER :
             return{
             ...state,
            users: [action.payload, ...state.users]
                        }
                
                
        default: return state;
    }
}