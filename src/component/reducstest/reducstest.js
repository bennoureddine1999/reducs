import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DELLET, DONE } from "../../action/action";

import "./reducstest.css";
import { nanoid } from "nanoid";

function Reducstest() {
  const dispatch = useDispatch();
  const [inputvalue, setInputvalue] = useState("");
  const todo = useSelector((state) => state.todo);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setInputvalue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(ADD({ task: inputvalue, id: nanoid(), done: false }));
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {todo.map((value) => (
          <div>
            <li
              key={value.id}
              style={{
                textDecoration: value.done ? "line-through" : "none",
              }}
            >
              {value.task}
            </li>
            <button
              style={{ marginLeft: "2rem" }}
              onClick={() => {
                dispatch(DELLET(value.id));
              }}
            >
              Dellet
            </button>
            <button
              style={{ marginLeft: "2rem" }}
              onClick={() => {
                dispatch(DONE(value.id));
              }}
            >
              Done
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Reducstest;
