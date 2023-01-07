import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactModal from "react-modal";
import { Button, ButtonGroup, Title } from "./ModalDelete.style";

export default function ModalDelete({ deleteModeState, deletePost }) {
  const [deleteMode, setDeleteMode] = deleteModeState;
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function removeBodyOverlay() {
    document.querySelector("body").style = "overflow: hidden";
  }

  function addBodyOverlay() {
    document.querySelector("body").style = "overflow: unset";
  }

  function handleDelete() {
    setVisible(true);
    setDisabled(true);
    deletePost(
      () => {
        setVisible(false);
        setDisabled(false);
        setDeleteMode(false);
      },
      () => {
        setVisible(false);
        setDisabled(false);
      }
    );
  }

  return (
    <ReactModal
      isOpen={deleteMode}
      onAfterOpen={removeBodyOverlay}
      onAfterClose={addBodyOverlay}
      overlayClassName={"modal-overlay"}
      className={"modal-content"}
      ariaHideApp={false}
    >
      <Title>
        Are you sure you want <br /> to delete this post?
      </Title>
      <ButtonGroup>
        <Button
          disabled={disabled}
          blue={false}
          onClick={() => setDeleteMode(false)}
        >
          No, go back
        </Button>
        <Button disabled={disabled} blue={true} onClick={handleDelete}>
          {!visible ? "Yes, delete it " : ""}
          <ThreeDots
            height="18"
            width="80"
            color="#fff"
            ariaLabel="three-dots-loading"
            visible={visible}
          />
        </Button>
      </ButtonGroup>
    </ReactModal>
  );
}
