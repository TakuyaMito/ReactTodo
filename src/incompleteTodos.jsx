import React from "react";

export const IncompleteTodos = (props) => {
  const {todos, onclickComplete, onClickDelete} = props;
  return(
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
            <span>{todo}</span>
            <button onClick={ () => onclickComplete(index)}>完了</button>
            <button onClick={ () => onClickDelete(index)}>削除</button>
          </li>
          )
        })}
      </ul>
    </div>
  )
};