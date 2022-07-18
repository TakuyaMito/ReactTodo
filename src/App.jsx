import React, { useState } from "react";
import './styles.css';
export const App = () => {
  const [todoText, setTodotext] = useState('');
  // 未完了のTODOを格納する
  const [incompleteTodos, setIncompleteTodos] = useState(['未完了', '焼肉']);
  const [completeTodos, setCompleteTodos] = useState(['完了']);

  const onChangeTodoText = (e) => setTodotext(e.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodotext('');
  };

  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
              <span>{todo}</span>
              <button>完了</button>
              <button>削除</button>
            </li>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="listrow">
              <span>{todo}</span>
              <button>戻す</button>
            </li>
            )
          })
          }
        </ul>
      </div>
    </>
  );
}