import React, { useContext } from "react";
import classes from "./Today.module.css";
import { TodoContext } from "../../context/TodoContext";
import TableRow from "../../shared/UI/TableCol/TableRow";

const Today = () => {
  const { todo } = useContext(TodoContext);

  return (
    <div className="responsive-table">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Title</th>
            <th>Task</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>

        <TableRow todo={todo} />
      </table>
    </div>
  );
};

export default Today;
