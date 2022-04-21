import { useState } from "react";
import "./App.scss";
import List from "../List/List";

const initialState = [
  {
    id: 1,
    body: "hello there, can anybody see me?",
    created_at: "2022-04-20T19:12:34.877Z",
  },
  {
    id: 2,
    body: "is any of this matter?",
    created_at: "2022-04-20T20:30:42.458Z",
  },
  {
    id: 3,
    body: "Come one come all",
    created_at: "2022-04-20T20:31:23.973Z",
  },
];

function App() {
  const [state, setState] = useState(initialState);

  return (
    <>
      <ul>
        <List messages={state} />
      </ul>
    </>
  );
}

export default App;
