import Square from "./components/Square";
import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen flex justify-center items-center gap-3">
      <Button name={1}>button 1</Button>
      <Button name={2}>button 2</Button>
      <Button name={3}>button 3</Button>
    </div>
  );
}

export default App;
