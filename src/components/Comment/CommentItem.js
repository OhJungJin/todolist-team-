import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCommentThunk } from "redux/commentSlice";

export default function CommentItem({
  postComment,
  deleteCommeent,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [comment, setComment] = useState(postComment);

  const dispatch = useDispatch();

  const handleToggleEditMode = () => {
    if (isEditMode) setComment(postComment);
    setIsEditMode((prev) => !prev);
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const handleEditSubmit = (e, id) => {
    const payload = comment;
    dispatch(updateCommentThunk({ id, payload }));
    handleToggleEditMode();
  };

  useEffect(() => {
    setComment(postComment);
  }, [postComment]);

  return (
    <div className="flex flex-row items-center justify-between border-b-4 h20">
      <div className="w-3/5">
        {!isEditMode ? (
          <>
            <div>{postComment.userName}</div>
            <div className="text-2xl">{postComment.desc}</div>
          </>
        ) : (
          <>
            <input
              name="userName"
              value={comment.userName}
              onChange={handleInputChange}
              className="block"
            />
            <input
              type="text"
              name="desc"
              value={comment.desc}
              className="text-2xl"
              onChange={handleInputChange}
              autoFocus
            />
          </>
        )}
        {isEditMode && (
          <button onClick={(e) => handleEditSubmit(e, postComment.id)}>
            수정완료
          </button>
        )}
      </div>
      <div className="flex items-center justify-center gap-4 mr-3">
        <button onClick={handleToggleEditMode}>
          {isEditMode ? "취소" : "수정"}
        </button>
        <button
          onClick={() => {
            deleteCommeent(postComment.id);
          }}>
          삭제
        </button>
      </div>
    </div>
  );
}