import React, { Component } from "react";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import AddContact from "./components/Contacts/AddContact";
import { Provider } from "./Context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import EditContact from "./components/Contacts/EditContact";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
