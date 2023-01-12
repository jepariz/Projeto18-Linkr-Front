import { useState } from "react";
import { FaRetweet } from "react-icons/fa";
import { repostPost } from "../../../api/post";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import { Button } from "./RepostButton.style";

export default function RepostButton({ post_id, re_post_times }) {
  const [repostNumber, setRepostNumber] = useState(re_post_times);
  const [showModal, setShowModal] = useState(false);
  function handleRepost(sucessFn, FailedFn) {
    repostPost(post_id)
      .then(() => {
        setRepostNumber((n) => parseInt(n) + 1);
        sucessFn();
      })
      .catch((err) => {
        FailedFn();
        alert("OCORREU ALGUM ERRO AO REPOSTAR, TENTE MAIS TARDE");
      });
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <FaRetweet fontSize={20} color="#fff" />
        {repostNumber + " re-posts"}
      </Button>
      <ConfirmModal
        visibleState={[showModal, setShowModal]}
        confirmFn={handleRepost}
        text={{
          title: "Do you want to re-post this link?",
          cancelText: "No, cancel",
          confirmText: "Yes, share!",
        }}
      />
    </>
  );
}
