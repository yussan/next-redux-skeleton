import { POSTS_REQ_DONE, POSTS_REQ_WAITING } from "./types";

/**
 * sample function to fetch api
 */
export function fetchApi(response) {
  if (!response) {
    return {
      type: POSTS_REQ_WAITING,
    };
  } else {
    return {
      type: POSTS_REQ_DONE,
      response,
    };
  }
}
