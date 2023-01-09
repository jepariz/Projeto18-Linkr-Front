import axios from "axios";
import URL_back from "../utils/URL_back";

export function getLast20Posts() {
  const URL = URL_back + "timeline";
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
