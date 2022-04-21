import { useState, useEffect } from "react";
import "./App.scss";
import List from "../List/List";
import NewMessage from "../NewMessage";
import axios from "axios";

const initialState = [];
const API_MESSAGES = "http://localhost:8080/api/messages";

function App() {
  const [state, setState] = useState(initialState);

  // initailize state
  useEffect(() => {
    axios.get(API_MESSAGES).then((res) => {
      const messages = res.data;
      console.log(messages);
      setState([...messages]);
    });
  }, []);

  return (
    <>
      <h1 className="new-message-header">Write Message</h1>
      <NewMessage />
      <h3>Message History</h3>
      <ul>
        <List messages={state} />
      </ul>
    </>
  );
}

export default App;
