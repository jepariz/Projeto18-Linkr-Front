import { useState } from "react";
import { deletePostById } from "../../../api/post";
import {
  Button,
  ContainerButtons,
  ContainerGlobal,
  ContainerModal,
  Text,
} from "./styles";

export default function ModalDeletePost({ id, setOpen, reload }) {
  const [disabled, setDisabled] = useState(false);
  function handleDelete() {
    setDisabled(true);
    deletePostById(id)
      .then(() => {
        reload();
        setOpen(false);
      })
      .catch((error) => {
        alert("Não foi possivel apagar");
        setOpen(false);
        setDisabled(true);
      });
  }

  return (
    <ContainerGlobal>
      <ContainerModal>
        <Text>Are you sure you want to delete this post?</Text>
        <ContainerButtons>
          <Button
            disabled={disabled}
            blue={false}
            onClick={() => setOpen(false)}
          >
            No, go back
          </Button>
          <Button disabled={disabled} blue={true} onClick={handleDelete}>
            Yes, delete it
          </Button>
        </ContainerButtons>
      </ContainerModal>
    </ContainerGlobal>
  );
}
