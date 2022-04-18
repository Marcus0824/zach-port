
import './App.scss';
import FrontPage from './components/FrontPage'
import Admin from './components/Admin'
import Gallery from './components/Gallery'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GalleryContext, useImages } from './components/Gallery'


/*
  Set Up Basic Routing
*/

function App() {
  const [images, setImages, loaded] = useImages();

  return (
        <div>
          <GalleryContext.Provider value={[images, setImages, loaded]}>
            <Router>
              <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/home" element={<Gallery />} />
                <Route path="/edit" element={<Admin />} />
              </Routes>
            </Router>
          </GalleryContext.Provider>
        </div>

  )
}

export default App;
