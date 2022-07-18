import React from "react";

export const CompleteTodos = (proprs) => {
  const {todos, onclickBack} = proprs;
  return(
    <div className="complete-area">
    <p className="title">完了のTODO</p>
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={todo} className="listrow">
          <span>{todo}</span>
          <button onClick={ () => onclickBack(index)}>戻す</button>
        </li>
        )
      })
      }
    </ul>
  </div>
  );
}