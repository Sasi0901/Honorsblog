import {
  FETCH_POST,
  DELETE_POST,
  UPDATE_POST,
  CREATE_POST,
} from "../actions/postActions";

const initialState = {
  post: {},
  update: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload };
    case CREATE_POST:
      return { ...state, post: action.payload };
    case DELETE_POST:
      return initialState; // or handle the delete logic
    case UPDATE_POST:
      return {
        ...state,
        post: { ...state.post, ...action.payload },
        update: false,
      };
    default:
      return state;
  }
};
