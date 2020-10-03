import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { Container, Content, Footer, Navbar } from "./Components/Layout/";
import { StateProvider } from "./GlobalState";
import "./index.css";
import App from "./pages/App";
import About from "./pages/About";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <React.StrictMode>
    <Router>
      <StateProvider>
        <Container>
          <Navbar />
          <Content>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/SubMenu2" component={SubMenu2Page} /> */}
              {/* <Route path="/404" component={NotFoundPage} /> */}
              <Redirect to="/404" />
            </Switch>
          </Content>
          <Footer />
        </Container>
      </StateProvider>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
