import CardsSections from '../pages/CardsSections';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from '../pages/Form';
import Navbar from './Navbar';
import UpdateForm from '../pages/UpdateForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CardsSections} />
          <Route path="/form" component={Form} />
          <Route path="/update/:id" component={UpdateForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
