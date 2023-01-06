import axios from "axios";

export function getTrending(setTrending) {
    const URL = "http://localhost:4000/trending";
    axios.get(URL).then(({ data }) => {
        setTrending(() => data);
      })
      .catch((error) =>
        alert(
          "An error occured while trying to fetch the trending topics, please refresh the page"
        )
      );
}