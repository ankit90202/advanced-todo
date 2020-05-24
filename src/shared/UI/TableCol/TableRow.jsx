import React from "react";

const TableRow = ({ todo }) => {
  const todos = todo.map((todo) => (
    <tr key={todo.id}>
      <td>{todo.id}.</td>
      <td>{todo.category}</td>
      <td>{todo.body}</td>
      <td>{todo.status ? "Completed" : "Pending"}</td>
      <td>{todo.schduledFor}</td>
      <td>
        <button className="btn btn-primary btn-sm">
          <i className="fa fa-pencil"></i>
        </button>
      </td>
      <td>
        <button className="btn btn-danger btn-sm">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  ));
  return <tbody>{todos}</tbody>;
};

export default TableRow;
