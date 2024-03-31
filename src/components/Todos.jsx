import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState(["react", "css"]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);

    let oldTodos = [...todos];
    oldTodos.push(event.target.title.value);
    console.log(oldTodos);

    setTodos(oldTodos);
  };

  const deleteTodo = (index) => {
    let temp = [...todos]
    temp = temp.filter((el, idx) => {
        return idx!= index
    })
    setTodos(temp)
  }

  return (
    <>
      <div>Todos</div>
      <hr />
      <form onSubmit={addTodo}>
        <input name="title" className="border border-black" type="text" />
        <button className="border border-black bg-gray-500 px-1 capitalize">
          add todo
        </button>
      </form>
      <hr />

      <ul className="pl-8 list-disc">
        {todos.map((todo, index) => {
          return (
            <li className="my-2">
              {todo}
              <button 
              className="ml-2 bg-red-300 text-white rounded px-2"
              onClick={() => {
                deleteTodo(index)
              }}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Todos;
