import axios from "axios";
import URL_back from "../utils/URL_back";

export function checkFollow(followed_id) {
    const URL = URL_back + "follow/" + followed_id;
    return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
    });   
}

export function setFollowing(followed_id) {
    const URL = URL_back + "follow/" + followed_id;
    return axios.post(URL, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
    });
}