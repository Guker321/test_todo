import React from 'react';
import TodoItems from './TodoItems/TodoItems';
import styles from './styles.module.css';

export default function Todo() {
  return (
    <div className={styles.todo_body}>
      <div className={styles.block_1}></div>
      <div className={styles.block_2}></div>
      <div className={styles.todo_title__container}>
        <h1 className={styles.todo_title}>Todo list</h1>
        <div className={styles.todo_items}>
          <button className={styles.todo_btn__add}>ADD</button>
        </div>
      </div>
      <TodoItems />
      <p className ={styles.author}>© 2021. Author Oleg</p>
    </div>
  );
}
