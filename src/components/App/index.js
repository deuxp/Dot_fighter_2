import { useState } from "react";
import "./App.scss";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";

function App() {
  const [state, setState] = useState({});

  return <List />;
}

export default App;
