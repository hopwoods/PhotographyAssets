import React from "react";
import { MessageSender, MessageBox } from "./Components/";
import { StateProvider } from "./GlobalState";

function App() {
  return (
    <StateProvider>
      <MessageSender />
      <MessageBox />
    </StateProvider>
  );
}

export default App;
