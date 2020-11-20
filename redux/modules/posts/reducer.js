import { POSTS_REQ_DONE, POSTS_REQ_WAITING } from "./types";

const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case POSTS_REQ_WAITING:
      return { ...{ loading: true } };
    case POSTS_REQ_DONE:
      return { ...{ response: action.response || {}, loading: false } };
    default:
      return state;
  }
};

export default PostsReducer;
