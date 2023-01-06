import axios from "axios";
const URL = "http://localhost:4000";

export function updatePostById({ id, comment }) {
  return axios.put(
    URL + "/post/" + id,
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
  return axios.get(URL + "/user/" + id, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}

export function getUser() {
  return axios.get(URL + "/user", {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}

export function deletePostById(id) {
  return axios.delete(URL + "/post/" + id, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
