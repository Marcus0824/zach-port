
import './App.scss';
import FrontPage from './components/FrontPage'
import Admin from './components/Admin'
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
              <Route path="/home" element={<Admin />} />
            </Routes>
          </Router>
        </div>

  )
}

export default App;
