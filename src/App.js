import './App.css';
//import CounterContainer from './containers/CounterContainer/CounterContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
/*import LoginContainer from './containers/LoginContainer/LoginContainer';*/

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Hola'/>
    </div>
  );
}

export default App;
