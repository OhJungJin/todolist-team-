<<<<<<< HEAD
import Layout from "components/Layout.js/Layout";
import React from "react";
=======
import React, { useState } from "react";
import Comment from "components/Comment/Comment";
import { useParams } from "react-router-dom";
>>>>>>> Comment

// import { useNavigate,useParams } from "react-router-dom";
export default function Detail() {
<<<<<<< HEAD
	return <Layout>Detail</Layout>;
=======
  const [isComment, setComment] = useState(true);
  // 브라우저 라우터 씌워주면 주석처리 해제 해주세요
  // const navigate =useNavigate()
  // const param = useParams()
  return (
    <div>
      {isComment === true ? (
        <div className="container mx-auto h-screen">
          <div className="flex justify-around p-1 w-3/5 mx-auto my-4">
            <p className="w-3/5 text-2xl">title</p>
            <button className="w-1/5 border-2">수정하기</button>
            <button
              className="w-1/5 text-2xl font-bold"
              onClick={() => {
                // navigate(-1)  브라우저 라우터 씌우면 주석처리 해제
              }}
            >
              X
            </button>
          </div>
          <div className="h-1/4 w-3/4 mx-auto border-4 border-sky-600 rounded-lg grid content-between">
            <div>
              <p className="mt-4">본문 내용 입니다</p>
            </div>

            <div className="flex justify-end space-x-5 mr-4 mb-4">
              {/* 이 버튼을 누루면 댓글창이 사라져요 */}
              <button
                className=" border-2 border-black rounded-lg p-2"
                onClick={() => {
                  setComment(false);
                }}
              >
                댓글닫기
              </button>
              <button className=" border-2 border-black rounded-lg p-2">
                완료!
              </button>
            </div>
          </div>
          <Comment></Comment>
        </div>
      ) : (
        // false
        <div className="container mx-auto h-screen">
          <div className="flex justify-around p-4 w-3/5 mx-auto my-4">
            <p className="w-3/5 text-2xl">title</p>
            <button className="w-1/5 border-2">수정하기</button>
            <button className="w-1/5 text-2xl font-bold">X</button>
          </div>
          <div className="h-2/3 w-3/4 mx-auto border-4 border-sky-600 rounded-lg grid content-between">
            <div>
              <p className="mt-4">aaa</p>
            </div>

            <div className="flex justify-end space-x-5 mr-4 mb-4">
              {/* 이버튼 누르면 댓글창이 나와요 */}
              <button
                className=" border-2 border-black rounded-lg p-2"
                onClick={() => {
                  setComment(true);
                }}
              >
                댓글보기
              </button>
              <button className=" border-2 border-black rounded-lg p-2">
                완료!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
>>>>>>> Comment
}
