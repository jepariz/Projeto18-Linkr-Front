import axios from "axios";

export function getLast20Posts() {
  const URL = "http://localhost:4000/timeline";
  return axios.get(URL, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
