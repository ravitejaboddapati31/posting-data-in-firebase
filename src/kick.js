import React, { useState } from "react";
const Kick = () => {
  const [Todo, UpdateTodo] = useState([]);
  const [newtodo, Picktodo] = useState();
  const [todomessage, updatemessage] = useState("");

  const Add = () => {
    UpdateTodo((Todo) => [...Todo, newtodo]);
    updatemessage(newtodo + " todo added succesfully!");
  };
  return (
    <div className="container text-center">
      <p>{todomessage}</p>
      <p>your Todo name is: {newtodo}</p>
      <p>
        <label>TODO </label>

        <input
          type="text"
          onChange={(k) => Picktodo(k.target.value)}
          placeholder="enter todo here!"
        />
      </p>
      <p>
        <button onClick={Add} className="btn btn-outline-danger btn-sm mt-3 ">
          Add Todo!
        </button>
      </p>
      {
          Todo.map((element, index) => {
        return (
          <p key={index}>
            {index} ) {element}
          </p>
        );
      })}
    </div>
  )
}
export default Kick;