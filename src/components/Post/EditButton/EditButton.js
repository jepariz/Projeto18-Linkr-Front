import { FaPenAlt } from "react-icons/fa";

export default function EditButton({ editModeState }) {
  const [editMode, setEditMode] = editModeState;

  return (
    <button onClick={() => setEditMode(!editMode)}>
      <FaPenAlt fontSize={16} color="#fff" />
    </button>
  );
}
