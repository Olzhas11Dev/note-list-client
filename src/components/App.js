import CardsSections from '../pages/CardsSections';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from '../pages/Form';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CardsSections} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
