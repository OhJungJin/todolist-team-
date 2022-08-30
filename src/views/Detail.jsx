import Layout from "components/Layout.js/Layout";
import React, { useState, useEffect } from "react";
import Comment from "components/Comment/Comment";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "redux/commentSlice";
import {
  fetchTodo,
  updateTodoThunk,
  toggleTodo,
  updateTodoList,
} from "redux/todoSlice";

export default function Detail() {
  const dispatch = useDispatch();
  const param = useParams(3);
  const data = useSelector(state => state.todos);
  const todos = data.data;

  React.useEffect(() => {
    dispatch(fetchTodo());
    dispatch(fetchComment(param.id));
  }, []);

  const myTodo = todos?.filter(x => {
    return x.id === parseInt(param.id);
  });

  const [isComment, setComment] = useState(true);
  const [iscontent, setcontent] = useState(true);
  const [updateContent, setupdateContent] = useState(myTodo[0].content);
  const navigate = useNavigate();

  const updateTodoContent = data => {
    dispatch(updateTodoThunk(data));
    dispatch(updateTodoList(data));
  };
  if (!todos) return null;
  return (
    <div>
      {isComment === true ? (
        <div className="container mx-auto h-screen">
          <div className="flex justify-around p-4 w-3/5 mx-auto my-4">
            <p className="w-3/5 text-2xl">{myTodo[0].title}</p>
            <button
              className="w-1/5 border-2"
              onClick={() => {
                setcontent(!iscontent);
              }}
            >
              {iscontent === true ? "수정하기" : "수정취소"}
            </button>
            <button
              className="w-1/5 text-2xl font-bold"
              onClick={() => {
                navigate(-1);
              }}
            >
              X
            </button>
          </div>
          <div className="h-2/3 w-3/4 mx-auto border-4 border-sky-600 rounded-lg grid content-between">
            {iscontent === true ? (
              <div>
                <p className="mt-4">{myTodo[0].content}</p>
              </div>
            ) : (
              <div>
                <input
                  className="mt-4"
                  value={updateContent}
                  onChange={event => {
                    setupdateContent(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateTodoContent({
                      id: param.id,
                      content: updateContent,
                    });
                    setcontent(!iscontent);
                  }}
                >
                  수정 완료
                </button>
              </div>
            )}

            <div className="flex justify-end space-x-5 mr-4 mb-4">
              {/* 이버튼 누르면 댓글창이 나와요 */}
              <button
                className=" border-2 border-black rounded-lg p-2"
                onClick={() => {
                  setComment(false);
                }}
              >
                댓글보기
              </button>
              <button
                className=" border-2 border-black rounded-lg p-2"
                onClick={() => {
                  dispatch(
                    updateTodoThunk({ id: param.id, done: !myTodo[0].done })
                  );
                  toggleTodo({ id: param.id, done: !myTodo[0].done });
                }}
              >
                {myTodo[0].done ? "취소" : "완료"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto h-screen">
          <div className="flex justify-around p-1 w-3/5 mx-auto my-4">
            <p className="w-3/5 text-2xl">{myTodo[0].title}</p>
            <button
              className="w-1/5 border-2"
              onClick={() => {
                setcontent(!iscontent);
              }}
            >
              {iscontent === true ? "수정하기" : "수정취소"}
            </button>
            <button
              className="w-1/5 text-2xl font-bold"
              onClick={() => {
                navigate(-1);
              }}
            >
              X
            </button>
          </div>
          <div className="grid content-between h-48 w-3/4 mx-auto border-4 border-sky-600 border-solid rounded-lg ">
            {iscontent === true ? (
              <div>
                <p className="mt-4">{myTodo[0].content}</p>
              </div>
            ) : (
              <div>
                <input
                  className="mt-4"
                  value={updateContent}
                  onChange={event => {
                    setupdateContent(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateTodoContent({
                      id: param.id,
                      content: updateContent,
                    });
                    setcontent(!iscontent);
                  }}
                >
                  수정 완료
                </button>
              </div>
            )}

            <div className="flex justify-end space-x-5 mr-4 mb-4">
              {/* 이 버튼을 누루면 댓글창이 사라져요 */}
              <button
                className=" border-2 border-black rounded-lg p-2"
                onClick={() => {
                  setComment(true);
                }}
              >
                댓글닫기
              </button>
              <button
                className=" border-2 border-black rounded-lg p-2"
                onClick={() => {
                  dispatch(
                    updateTodoThunk({ id: param.id, done: !myTodo[0].done })
                  );
                  toggleTodo({ id: param.id, done: !myTodo[0].done });
                }}
              >
                {myTodo[0].done ? "취소" : "완료"}
              </button>
            </div>
          </div>
          <Comment userId={param.id}></Comment>
        </div>
      )}
    </div>
  );
}
