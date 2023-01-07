import axios from "axios";
import { headers } from "../utils/token";
const URL = "http://localhost:4000";

export function updatePostById({ id, comment }) {
  return axios.put(
    `${URL}/post/${id}`,
    {
      comment,
    },
    headers
  );
}

export function getUserPosts(id) {
  return axios.get(`${URL}/user/${id}`, headers);
}

export function deletePostById(id) {
  return axios.delete(URL + "/post/" + id, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
