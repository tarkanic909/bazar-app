import actions from "./actions";

function blogReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.FETCH_ERROR:
      return {
        ...state,
        fetchError: payload,
      };
    case actions.IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case actions.FETCH_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case actions.FETCH_POST:
      return {
        ...state,
        post: payload,
      };
    case actions.FETCH_TESTIMONIALS:
      return {
        ...state,
        testimonials: payload,
      };
    default:
      if (!action.hasOwnProperty("type")) {
        throw new Error("blogReducer: You must set type of action");
      }
      throw new Error(`blogReducer: Cant find action of this type: ${type}`);
  }
}

export default blogReducer;
