import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
function Comment({ userId }) {
  const commentList = useSelector(state => state.comments.list);
  const [postcomment, setpostcomment] = useState(commentList);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentCount] = useState(4);
  const commentLength = commentList.length;
  const maxPage =
    Math.ceil(commentLength / commentCount) === 0
      ? 1
      : Math.ceil(commentLength / commentCount);
  const lastIndex = currentPage * commentCount;
  const firstIndex = lastIndex - commentCount;
  console.log(commentList);
  React.useEffect(() => {
    setpostcomment(commentList.slice(firstIndex, lastIndex));
  }, [currentPage, commentCount]);
  return (
    <div className="container mx-auto h-full">
      <div className="border-2 border-emerald-400 h-3/5">
        <form className="flex items-center justify-center flex-row gap-4">
          <div>
            <input
              placeholder="작성자"
              className="w-50 h-10 block border-2 border-black border-solid "
            />
          </div>
          <input placeholder="댓글 내용" className="w-full h-10 border-2" />
          <button className="flex items-center justify-center flex-row h-10 w-60 border-2 border-balck border-solid">
            댓글달기
          </button>
        </form>
        <div className="flex justify-between">
          <button
            disabled={currentPage <= 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            이전댓글
          </button>
          <div>{`${currentPage}/${maxPage} `}</div>
          <button
            disabled={currentPage >= maxPage}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            다음 댓글
          </button>
        </div>
        <div>
          {postcomment.map(x => {
            return (
              <div
                key={x.id}
                className="flex items-center justify-between flex-row h20 border-b-4"
              >
                <div className="w-3/5">
                  <div>{x.userName}</div>
                  <div className="text-2xl ">{x.desc}</div>
                </div>
                <div className="flex items-center justify-center gap-4 mr-3">
                  {/* 버튼기능 구현 */}
                  <Link to="/editComment">수정</Link>
                  <button>삭제</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment;
