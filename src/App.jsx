import Square from "./components/Square";
import Alert from "./components/Alert"
import Alerts from "./components/Alerts"
import Counter from "./components/Counter";
import List from "./components/List";
import FancyList from "./components/FancyList";
import Form from "./components/Form";
import Jokes from "./components/Jokes";
import Users from "./components/Users";
import { useState } from "react";

function App() {
  const [exercise, setExercise] = useState(6);
  let item = null;
  switch (exercise) {
    case 0:
      item = <Square />;
      break;
    case 1:
      item = <Alert />;
      break;
    case 2:
      item = <Alerts />
      break;
    case 3:
      item = <Counter />
      break;
    case 4:
      item = <List />
      break;
    case 5:
      item = <FancyList />
      break;
    case 6:
      item = <Form />
      break;
    case 7:
      item = <Jokes />
      break;
    case 8:
      item = <Users />
      break;

    default:
      break;
  }

  return (
    <div className="min-h-[100vh] flex flex-col gap-3">
      <div className="flex justify-center items-center w-full gap-5 pt-4">
        {[0,1,2,3,4,5,6,7,8].map(el => <button className="hover:underline" onClick={() => setExercise(el)}>exercise {el + 1}</button>)}
      </div>
      <div className="flex justify-center items-center flex-1 w-full">
        {item}
      </div>
    </div>
  );
}

export default App;
