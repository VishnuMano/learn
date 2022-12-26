import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Vue" />
      <Todo text="React" />
      <Todo text="Angular" />
    </div>
  );
}

export default App;
