import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Cart } from './components/Cart';
import { Detail } from './components/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App bg-light">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Product} />
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/detail" component={Detail}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
