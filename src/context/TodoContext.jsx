import React, { useState, createContext } from "react";

export const TodoContext = createContext();

const initialTodo = [
  {
    id: 1,
    category: "Buy",
    body: "Buy Milk",
    status: true,
    schduledFor: "10:00 A.M.",
    create_at: "25/05/2020",
  },
  {
    id: 2,
    category: "Read",
    body: "Read NewsPaper",
    status: false,
    schduledFor: "11:00 A.M.",
    create_at: "25/05/2020",
  },
  {
    id: 3,
    category: "Play",
    body: "Play Footbal",
    status: false,
    schduledFor: "12:00 A.M.",
    create_at: "25/05/2020",
  },
];

const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState(initialTodo);
  return (
    <TodoContext.Provider value={{ todo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
