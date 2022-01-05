import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Index';

function App() {
  return (
    <>
    <Router>
      <Home to='/'/>
    </Router>
    </>
  );
}

export default App;
