import React from "react";

function Comment() {
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
        <div>
          {/* 여기를 map해주세요 */}
          <div className="flex items-center justify-between flex-row h20 border-b-4">
            <div className="w-3/5">
              <div>작성자</div>
              <div className="text-2xl ">댓글내용</div>
            </div>
            <div className="flex items-center justify-center gap-4 mr-3">
              {/* 버튼기능 구현 */}
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
