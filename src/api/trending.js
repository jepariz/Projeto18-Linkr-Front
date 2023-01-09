import axios from "axios";
import URL_back from "../utils/URL_back";

export function getTrending(setTrending) {
  const URL = URL_back + "trending";
  axios
    .get(URL)
    .then(({ data }) => {
      setTrending(() => data);
    })
    .catch((error) =>
      alert(
        "An error occured while trying to fetch the trending topics, please refresh the page"
      )
    );
}
