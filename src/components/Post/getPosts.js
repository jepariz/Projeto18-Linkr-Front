import { getPostsByHashtag } from "../../api/hashtag";
import { getLast10Posts } from "../../api/timeline";

export default function getPosts(
  setPosts,
  setLoading = () => {},
  hashtag = ""
) {
  if (hashtag === "") {
    getLast10Posts()
      .then(({ data }) => {
        setPosts(() => data);
        if (data.length === 0) {
          alert("There are no posts yet");
        }
      })
      .catch((error) => {});
  } else {
    setLoading(true);
    getPostsByHashtag(hashtag)
      .then(({ data }) => {
        setPosts(() => data);
        setLoading(false);
      })
      .catch((error) => {});
  }
}
