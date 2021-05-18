import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    UPDATE_LIKES,
    ADD_POST,
    ADD_COMMENT,
  } from "../actions/types";
   
  const initialState = {
    posts: [{}],
    loading: true,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_POSTS:
        return {
          ...state,
          posts : [action.payload, ...state.posts],
        };
      case GET_POST:
        return {
          ...state,
          post: payload,
          loading: false,
        };
      case ADD_POST:
        return {
          ...state,
          posts: [payload, ...state.posts],
          loading: false,
        };
      case POST_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      case UPDATE_LIKES:
        return {
          ...state,
          posts: state.posts.map((post) =>
            post._id === payload.id ? { ...post, likes: payload.likes } : post
          ),
          loading: false,
        };
      case ADD_COMMENT:
        return {
          ...state,
          posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, comments: payload.comments } : post
        ),
          loading: false,
        };
      default:
        return state;
    }
  }