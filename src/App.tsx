import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {

  return (
    <>
      <TodoList />
      <div className="form-container">
        <Form />
      </div>
    </>
  );
}

export default App;
