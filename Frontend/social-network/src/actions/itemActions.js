
import axios from 'axios';
import {GET_USERS, ADD_USER, UPDATE_USER , ITEMS_LOADING} from '../actions/types'

export const getUsers = () => async dispatch => {
	dispatch(setItemsLoading());
    try{
        const res = await axios.get('http://localhost:5000/api/user/608b5f75364b4861c006aa72')
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            payload: console.log("salma" + e),
        })
    }

}

/*export const updateUser = id => dispatch => {
	axios
	.delete(`/api/items/${id}`)
	.then(res=>{
	   dispatch({
 		type: DELETE_ITEM,
		payload : id
	   })
	})
}; */

export const updateUser  = user => async dispatch => {
    try{
        const res = await  axios.put('http://localhost:5000/api/user/608b5f75364b4861c006aa72',user , { headers: {"Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDhiNWY3NTM2NGI0ODYxYzAwNmFhNzIiLCJlbWFpbCI6InNhbG1hQGdtYWlsLmNvbSIsImlhdCI6MTYyMDA1NDQ1MSwiZXhwIjoxNjIwMDU4MDUxfQ.1__HW-xzZuH20DNHFb9lwv5nMMS1daEcJN5CTfaBUZ0"}})
        dispatch( {
            type: UPDATE_USER,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            payload: console.log(e),
        })
    }

}

/*export const updateUser =  user  => dispatch =>{
	axios
    .put('http://localhost:5000/api/user/608b5f75364b4861c006aa72',user)
	.then(res=>{
	   dispatch({
 		type: UPDATE_USER,
		payload : res.data
	   })
	})
};*/

export const setItemsLoading = () => {
	return{
		type: ITEMS_LOADING
	};

};