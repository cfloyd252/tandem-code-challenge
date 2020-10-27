import Landing from '../Pages/Landing/Landing';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Landing} />
    </div>
  );
}

export default App;
