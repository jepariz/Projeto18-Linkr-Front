import { FaTrashAlt } from "react-icons/fa";

export default function DeleteButton({ deleteModeState }) {
  const [deleteMode, setDeleteMode] = deleteModeState;

  return (
    <button onClick={() => setDeleteMode(!deleteMode)}>
      <FaTrashAlt fontSize={16} color="#fff" />
    </button>
  );
}
