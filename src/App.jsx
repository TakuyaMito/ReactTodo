import React, { useState } from "react";
import './styles.css';
import { InputTodo } from './components/inputTodo';
import { IncompleteTodos } from "./incompleteTodos";
import { CompleteTodos } from "./CompleteTodos";

export const App = () => {
  const [todoText, setTodotext] = useState('');
  // 未完了のTODOを格納する
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodotext(e.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodotext('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onclickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了のTodo生成
    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos);
  }

  const onclickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    // 未完了のTodo生成;
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);

  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && (<p style={{color: 'red'}}>登録できるTODOは5個までです。</p>)}
      
      <IncompleteTodos todos={incompleteTodos} onclickComplete={onclickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} onclickBack={onclickBack} />
    </>
  );
}