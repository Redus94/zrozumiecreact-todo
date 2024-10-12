import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const [todos, setTodos] = useState([
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ]);

  const addItem = (newTodoName) => {
    setTodos((prevTodos) => [
      {
        name: newTodoName,
        done: false,
        id: prevTodos > 0 ? prevTodos.at(-1).id + 1 : 0,
      },
      ...prevTodos,
    ]);
    setIsFormShown(false);
  };

  const deleteItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const finishItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          done: true,
        };
      })
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => {
              setIsFormShown(true);
            }}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => {
          return (
            <TodoItem
              key={id}
              name={name}
              done={done}
              onDeleteButtonClick={() => deleteItem(id)}
              onDoneButtonClick={() => finishItem(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
