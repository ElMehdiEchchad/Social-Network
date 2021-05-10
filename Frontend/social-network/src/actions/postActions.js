import axios from "axios";
import { setAlert } from "./alertActions";
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

// get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/posts", {withCredentials :true});

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};

// get post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};

// Add likes
export const addLike = (id, likedBy) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/like`, (id, likedBy), {withCredentials: true});

    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};

// Remove likes
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/posts/${id}`);
    // await axios.delete(`/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};

// Add a post
export const addPost = (post) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:5000/api/posts/`, post, {withCredentials: true});

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};

// Add a comment
export const addComment = (postId, userId, formData) => async (dispatch) => {

  try {
    const res = await axios.post(`http://localhost:5000/api/posts/comment/${postId}`, (userId, formData), {withCredentials: true});

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};

// delete a comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: console.log(err),
    });
  }
};