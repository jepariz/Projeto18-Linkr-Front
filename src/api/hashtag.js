import axios from "axios";
import URL_back from "../utils/URL_back";

export function getPostsByHashtag(hashtag) {
  const URL = URL_back + "hashtag/" + hashtag;
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
