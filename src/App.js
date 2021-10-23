import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import { useSelector } from "react-redux";

function App() {

  const login = useSelector(state => state.newLogin.login)
  const routes = useRoutes(login)

  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
