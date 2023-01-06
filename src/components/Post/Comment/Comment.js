import { useEffect, useRef, useState } from "react";
import { ReactTagify } from "react-tagify";
import { updatePostById } from "../../../api/post";
import { CommentInput, CommentText, Container } from "./styles";

export default function Comment({ text, id, editModeState }) {
  const [editMode, setEditMode] = editModeState;
  const [inputValue, setInputValue] = useState(text);
  const [paragraphText, setParagraphText] = useState(text);
  const [inputDisabled, setInputDisabled] = useState(false);
  const inputRef = useRef(null);

  const regex = /#[a-z\d]+/ig;
  const hashtags = paragraphText.match(regex);
  
  const tagStyle ={
    color: 'white',
    fontWeight: 700,
    cursor: 'pointer'
  }

  function handleCommentInput(e) {
    if (e.keyCode === 13) {
      updateComment({ id, comment: inputValue.trim() });
    }

    if (e.keyCode === 27) setEditMode(false);
  }

  function updateComment({ id, comment }) {
    setInputDisabled(true);
    updatePostById({ id, comment })
      .then(() => {
        setEditMode(false);
        setInputDisabled(false);
        setParagraphText(comment);
      })
      .catch((error) => {
        setInputDisabled(false);
        alert("Ocorreu um erro");
      });
  }

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  return (
    <Container>
      {editMode ? (
        <CommentInput
          disabled={inputDisabled}
          contenteditable
          value={inputValue}
          onKeyDown={handleCommentInput}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
      ) : (
        <CommentText><ReactTagify tag={hashtags}  tagStyle={tagStyle}>{paragraphText}</ReactTagify></CommentText>
      )}
    </Container>
  );
}
