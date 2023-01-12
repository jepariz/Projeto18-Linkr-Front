import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactModal from "react-modal";
import { Button, ButtonGroup, Title } from "./ConfirmModal.style";

export default function ConfirmModal({ visibleState, confirmFn, text }) {
  const [visible, setVisible] = visibleState;
  const [disabled, setDisabled] = useState(false);

  function removeBodyOverlay() {
    document.querySelector("body").style = "overflow: hidden";
  }

  function addBodyOverlay() {
    document.querySelector("body").style = "overflow: unset";
  }

  function handleConfirm() {
    setVisible(true);
    setDisabled(true);
    confirmFn(
      () => {
        setVisible(false);
        setDisabled(false);
      },
      () => {
        setVisible(false);
        setDisabled(false);
      }
    );
  }

  return (
    <ReactModal
      isOpen={visible}
      onAfterOpen={removeBodyOverlay}
      onAfterClose={addBodyOverlay}
      overlayClassName={"modal-overlay"}
      className={"modal-content"}
      ariaHideApp={false}
    >
      <Title>{text.title}</Title>
      <ButtonGroup>
        <Button
          disabled={disabled}
          blue={false}
          onClick={() => setVisible(false)}
        >
          {text.cancelText}
        </Button>
        <Button disabled={disabled} blue={true} onClick={handleConfirm}>
          {!disabled ? text.confirmText : ""}
          <ThreeDots
            height="18"
            width="80"
            color="#fff"
            ariaLabel="three-dots-loading"
            visible={disabled}
          />
        </Button>
      </ButtonGroup>
    </ReactModal>
  );
}
