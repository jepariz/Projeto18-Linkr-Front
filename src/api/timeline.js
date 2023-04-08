import axios from "axios";
import URL_back from "../utils/URL_back";

export function getLast10Posts(config = {}) {
  const URL = URL_back + "timeline";
  let query;
  if (config) query = config.date ? `?date=${config.date}` : "";
  return axios.get(URL + query, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
  });
}
