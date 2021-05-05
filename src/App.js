import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import NavBar from '../src/shared/NavBar';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


/* function App() {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
} */


function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route path="/category/:categoryId">
          <ItemListContainer/>
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
