import { useState } from "react";
import { ReactTagify } from "react-tagify";
import {
  CommentContainer,
  CommentInput,
  CommentParagraph,
} from "./Comment.style";

export default function Comment({ text, editModeState, update }) {
  const [editMode, setEditMode] = editModeState;
  const [value, setValue] = useState(text);
  const [paragraphText, setParagraphText] = useState(text);
  const [disabled, setDisabled] = useState(false);
  const regex = /#[a-z\d]+/gi;
  const hashtags = paragraphText.match(regex);

  const tagStyle = {
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  };

  function handleKeyDown(e) {
    const newValue = value.trim();
    if (e.keyCode === 13) {
      setDisabled((d) => true);
      update(
        { comment: newValue },
        () => {
          setEditMode(false);
          setParagraphText(newValue);
        },
        () => setDisabled((d) => false)
      );
    } else if (e.keyCode === 27) {
      setEditMode(false);
      setValue(newValue);
    }
  }

  return (
    <CommentContainer>
      {editMode ? (
        <CommentInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
      ) : (
        <CommentParagraph>
          <ReactTagify tag={hashtags} tagStyle={tagStyle}>
            {paragraphText}
          </ReactTagify>
        </CommentParagraph>
      )}
    </CommentContainer>
  );
}
