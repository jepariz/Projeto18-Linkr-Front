import axios from "axios";

export function updatePostById({ id, comment }) {
  const URL = "http://localhost:4000/post/";
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
