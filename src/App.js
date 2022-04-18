
import './App.scss';
import FrontPage from './components/FrontPage'
import Admin from './components/Admin'
import Gallery from './components/Gallery'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


/*
  Set Up Basic Routing
*/

function App() {
  return (
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="/home" element={<Gallery />} />
              <Route path="/edit" element={<Admin />} />
            </Routes>
          </Router>
        </div>

  )
}

export default App;
