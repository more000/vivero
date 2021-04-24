import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
/*import LoginContainer from './containers/LoginContainer/LoginContainer';*/

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
    </div>
  );
}

export default App;
