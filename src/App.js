
import './App.scss';
import FrontPage from './components/FrontPage'
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
              <Route path="/home" element={<div>
                  <h1>PICTURES</h1>
              </div>} />
            </Routes>
          </Router>
        </div>

  )
}

export default App;
