import { getPostsByHashtag } from "../../api/hashtag";
import { getLast20Posts } from "../../api/timeline";

export default function getPosts(setPosts, setLoading=() => {}, hashtag = "") {
  if (hashtag === "") {
    getLast20Posts()
      .then(({ data }) => {
        setPosts(() => data);
        if (data.length === 0) {
          alert("There are no posts yet");
        }
      })
      .catch((error) =>
        alert(
          "An error occured while trying to fetch the posts, please refresh the page"
        )
      );
  } else {
    setLoading(true);
    getPostsByHashtag(hashtag)
      .then(({ data }) => {
      setPosts(() => data);
      setLoading(false);
    })
    .catch((error) =>
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      )
    );
  }
}
