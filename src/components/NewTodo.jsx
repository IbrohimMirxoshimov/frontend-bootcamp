import { useEffect, useState } from "react";
import "./style/index.css";
import axios from "axios";

function NewTodo() {
  // VAZIFA TODO
  // - api bilan olish kerak
  // - hammasini ochirish
  // - har birini o'chirish
  // - qidirish
  // - yangi qo'shish
  // - bajarilgan bo'lsa ustiga chizish va o'zgartirish
  // - nomini kotta harfda qilib qo'yish (button)

  // - nomini o'zgartirish bosganda modal ochishi kerak va saqlash kerak

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch(() => {
        alert("Xatolik");
      });
  }, []);

  return (
    <div className="h-screen m-2 px-12">
      <input
        className="border border-gray-600"
        value={input}
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
      />

      {todos
        .filter((todo) => {
          if (!input) {
            return true;
          }

          return todo.title.toLowerCase().includes(input.toLowerCase());
        })
        .map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex justify-between"
            >
              <div className={todo.bajarildi ? "line-through" : ""}>
                {todo.id}. {todo.title}
              </div>

              <div>
                <button
                  className="mr-3"
                  onClick={() => {
                    const new_arr = todos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item,
                          bajarildi: !todo.bajarildi,
                        };
                      }

                      return item;
                    });

                    setTodos(new_arr);
                  }}
                >
                  {todo.bajarildi ? "Orqaga qaytar" : "Bajardim"}
                </button>
                <button
                  onClick={() => {
                    const new_todos = todos.filter((item) => {
                      return todo.id !== item.id;
                    });

                    setTodos(new_todos);
                  }}
                >
                  O'chirish
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default NewTodo;
