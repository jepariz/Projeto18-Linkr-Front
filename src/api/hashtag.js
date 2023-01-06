import axios from "axios";

export function getPostsByHashtag(hashtag) {
  const URL = "http://localhost:4000/hashtag/" + hashtag;
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
