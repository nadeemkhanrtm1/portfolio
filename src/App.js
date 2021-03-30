import './App.scss';
import Home from "./component/Home";
import About from "./component/About";
import Header from "./component/Layouts/Header";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Service}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
