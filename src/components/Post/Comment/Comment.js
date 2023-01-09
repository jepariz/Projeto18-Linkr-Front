import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import {
  CommentContainer,
  CommentInput,
  CommentParagraph,
} from "./Comment.style";
import { updatePostById } from "../../../api/post";

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

  const navigate = useNavigate();

  function handleTagClick(tag) {
    const hash = tag.trim().split("#");

    if (hash[0] === "") {
      hash.shift();
    }

    navigate(`/hashtag/${hash}`);
  }

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
        <CommentParagraph><ReactTagify tag={hashtags}  tagClicked={(tag) => handleTagClick(tag)} tagStyle={tagStyle}>{paragraphText}</ReactTagify></CommentParagraph>
      )}
    </CommentContainer>
  );
}
