import React from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

export default function TodoItems() {
  const [items, setItem] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItem(response.data);
    });
  }, []);
  if (!items) return null;

  let randId = [];
  for (let i = 0; i < 5; i++) {
    randId.push(randInt(0, 200));
  }

  let randItems = items.filter((el) => randId.includes(el.id));

  pseudoDouble(randItems);

  let clickHandler = (event) => {
    event.target.closest('div').classList.toggle(`${styles.complete}`);
  };

  return (
    <div className={styles.items_container}>
      {randItems.map((el) => {
        return (
          <div key={el.id + el.title} className={styles.item}>
          <input
            type='checkbox'
            id={el.id}
            className={styles.checkbox}
            onClick={clickHandler}
          />
            <label htmlFor={el.id} className={styles.label}>
              {el.title}
            </label>
          </div>
        );
      })}
    </div>
  );
}

function randInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function pseudoDouble(arr) {
  arr[randInt(0,arr.length-1)].title = arr[randInt(0,arr.length-1)].title;
}

