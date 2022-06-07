import './App.css';
import AddTodo from "./components/AddTodo.js"
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <h1>My Tasks</h1>
    <AddTodo/>
    <TodoList/>
    </div>
  );
}

export default App;
