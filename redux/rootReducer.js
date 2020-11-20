import { combineReducers } from "redux";

// available reducers
import PostsReducer from "./modules/posts/reducer";

export default combineReducers({
  Posts: PostsReducer,
});
