import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";
import EditComment from "./EditComment";

function Comment({ userId, deleteCommeent }) {
  const commentList = useSelector((state) => state.comments.commentList);
  const isLoading = useSelector((state) => state.comments.isLoading);
  const [postCommentList, setPostCommentList] = useState(commentList);
  const [currentPage, setCurrentPage] = useState(1);

  const COMMENT_TOTAL_PER_COUNT = 4;

  const commentLength = commentList.length;
  const maxPage =
    Math.ceil(commentLength / COMMENT_TOTAL_PER_COUNT) === 0
      ? 1
      : Math.ceil(commentLength / COMMENT_TOTAL_PER_COUNT);
  const lastIndex = currentPage * COMMENT_TOTAL_PER_COUNT;
  const firstIndex = lastIndex - COMMENT_TOTAL_PER_COUNT;

  useEffect(() => {
    setPostCommentList(commentList.slice(firstIndex, lastIndex));
  }, [commentList, firstIndex, lastIndex]);

  return (
    <div className="container h-full mx-auto">
      <div className="border-2 border-emerald-400 h-3/5">
        <EditComment></EditComment>
        <div className="flex justify-between">
          <button
            disabled={currentPage <= 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}>
            이전댓글
          </button>
          <div>{`${currentPage}/${maxPage} `}</div>
          <button
            disabled={currentPage >= maxPage}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}>
            다음 댓글
          </button>
        </div>
        <div>
          {isLoading ? (
            <>로딩중</>
          ) : (
            postCommentList.map((postComment) => (
              <CommentItem
                key={postComment.id}
                postComment={postComment}
                deleteCommeent={deleteCommeent}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;