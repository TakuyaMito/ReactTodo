import React from "react";
import './styles.css';

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li className="list-row">
            <span>未完了</span>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li className="listrow">
            <span>完了</span>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
}