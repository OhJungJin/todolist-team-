import React from "react";
import { useNavigate } from "react-router-dom";
function List() {
  const navigate = useNavigate();
  return (
    <div className="flex-1">
      <div
        onClick={() => {
          navigate("/detail/1");
        }}
      >
        1
      </div>
      <div
        onClick={() => {
          navigate("/detail/2");
        }}
      >
        2
      </div>
      <div
        onClick={() => {
          navigate("/detail/3");
        }}
      >
        3
      </div>
    </div>
  );
}

export default List;
