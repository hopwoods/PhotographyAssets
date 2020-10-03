import React from "react";
import { MessageSender, MessageBox } from "./Components/controls";
import { Container, Content, Footer, Navbar } from "./Components/Layout/";
import { StateProvider } from "./GlobalState";

function App() {
  return (
    <StateProvider>
      <Container>
        <Navbar />
        <Content>
          <MessageSender />
          <MessageBox />
        </Content>
        <Footer />
      </Container>
    </StateProvider>
  );
}

export default App;
