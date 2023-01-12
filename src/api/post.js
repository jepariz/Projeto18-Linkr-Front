import axios from "axios";
import URL_back from "../utils/URL_back";

export function updatePostById({ id, comment }) {
  return axios.put(
    `${URL_back}post/${id}`,
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

export function getUserPosts(id) {
  return axios.get(`${URL_back}user/${id}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}

export function deletePostById(id) {
  return axios.delete(URL_back + "post/" + id, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}

export function repostPost(post_id) {
  return axios.post(
    URL_back + "repost/" + post_id,
    {},
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
      },
    }
  );
}
