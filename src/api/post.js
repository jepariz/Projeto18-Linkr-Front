import axios from "axios";
const URL = "http://localhost:4000/post/";

export function updatePostById({ id, comment }) {
  return axios.put(
    URL + id,
    {
      comment,
    },
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
      },
    }
  );
}

export function deletePostById(id) {
  return axios.delete(URL + id, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
