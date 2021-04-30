
import axios from 'axios';
import {GET_USER, ADD_USER, UPDATE_USER } from '/types'

export const getUser = () => dispatch => {
	dispatch(setItemsLoading());
	axios
    .get('http://localhost:5000/api/user/608b5f75364b4861c006aa72')
	.then(res => dispatch({
 	   type: GET_USER,
	   payload : res.data
	})
    )
};

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

export const addUser = item => dispatch =>{
	axios
    .post('http://localhost:5000/api/register',item)
	.then(res=>{
	   dispatch({
 		type: UPDATE_USER,
		payload : res.data
	   })
	})
};


