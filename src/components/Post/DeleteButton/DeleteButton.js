import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";

export default function DeleteButton({ deleteFn }) {
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <>
      <button onClick={() => setDeleteMode(!deleteMode)}>
        <FaTrashAlt fontSize={16} color="#fff" />
      </button>
      <ConfirmModal
        visibleState={[deleteMode, setDeleteMode]}
        confirmFn={deleteFn}
        text={{
          confirmText: "Yes, delete it",
          title: "Are you sure you want to delete this post?",
          cancelText: "No, go back",
        }}
      />
    </>
  );
}
