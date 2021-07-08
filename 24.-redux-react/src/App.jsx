import { Provider } from "react-redux";
import { TodoForm } from "./components/todo/todoForm";
import { TodoList } from "./components/todo/todoList";
import { Users } from "./components/users/Users";
import { store } from "./store/store";


function App() {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto grid grid-rows-2">
        <Provider store={ store }>
          <div className="min-h-screen flex justify-around ">
          <TodoForm />
          <TodoList/>
          </div>
          <div className="min-h-screen">
            <h1> Asynchronus Actions </h1>
            <Users />
          </div>
        </Provider>
        
      </div>
    </div>
  );
}

export default App;
