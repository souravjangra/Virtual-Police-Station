import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import HomeComponent from "./components/HomeComponent";

class App extends Component{
  render() {
    return (
        <React.Fragment>
        <NavBar/>
        <main className="container">
            <HomeComponent/>
        </main>
        </React.Fragment>
    );
  }
}

export default App;
