import axios from "axios";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";

export const CREATE_POST = "CREATE_POST";

export const createPost = (newPost, file) => async (dispatch) => {
  try {
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      await axios.post("/upload", data);
    }
    const res = await axios.post("/posts", newPost);
    window.location.replace("/post/" + res.data._id);
    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchPost = (path) => async (dispatch) => {
  const res = await axios.get("/posts/" + path);
  dispatch({
    type: FETCH_POST,
    payload: res.data,
  });
};

export const deletePost = (id, username) => async (dispatch) => {
  await axios.delete(`/posts/${id}`, { data: { username } });
  dispatch({
    type: DELETE_POST,
  });
};

export const updatePost = (id, username, title, desc) => async (dispatch) => {
  await axios.put(`/posts/${id}`, { username, title, desc });
  dispatch({
    type: UPDATE_POST,
    payload: { title, desc },
  });
};
