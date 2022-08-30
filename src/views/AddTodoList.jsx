import React from "react";
import Layout from "components/Layout.js/Layout";
import Form from "components/Form.js/Form";

import axios from "axios";
import useInput from "hooks/useInput";
import { useNavigate } from "react-router-dom";
export default function AddTodoList() {
  const navigate = useNavigate();
  async function addTodoData() {
    try {
      const response = await axios.post(
        "https://teamhomwork.herokuapp.com/todos",
        {
          title: title,
          content: content,
          done: false,
          createdAt: "",
        }
      );
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }

  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();

  return (
    <Layout>
      <Form
        title={title}
        onChangeTitleHandler={onChangeTitleHandler}
        content={content}
        onChangeContentHandler={onChangeContentHandler}
        addTodoData={addTodoData}
      ></Form>
    </Layout>
  );
}
