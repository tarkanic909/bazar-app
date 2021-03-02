import React, { createContext, useEffect, useReducer, useRef } from "react";
import blogReducer from "./blogReducer";
import fetchApi from "../../services/fetchApi";
import actions from "./actions";

const initialState = {
  fetchError: {},
  isLoading: false,
  posts: [],
  post: {},
};

export const BlogContext = createContext(initialState);

function BlogContextProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  const fetchPost = useRef(() => {});

  fetchPost.current = (id) => {
    const post = fetchApi(`/api/posts/${id}`);
    post
      .then((post) => {
        dispatch({ type: actions.FETCH_POST, payload: post });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    dispatch({ type: actions.IS_LOADING, payload: true });
    const posts = fetchApi("/api/posts");
    posts
      .then((posts) => {
        dispatch({ type: actions.FETCH_POSTS, payload: posts });
        dispatch({ type: actions.IS_LOADING, payload: false });
      })
      .catch((error) => {
        dispatch({ type: actions.FETCH_ERROR, payload: error });
        dispatch({ type: actions.IS_LOADING, payload: false });
      });
  }, []);

  return (
    <BlogContext.Provider
      value={{
        fetchError: state.fetchError,
        isLoading: state.isLoading,
        posts: state.posts,
        post: state.post,
        fetchPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;
