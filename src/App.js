import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import SigninPage from './pages/SigninPage/SigninPage';


function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/signin' component={SigninPage} exact />
    </Switch>
    </Router>
  );
}

export default App;
