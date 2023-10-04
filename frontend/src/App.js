import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import AboutUs from './pages/about us';
import Intro from './pages/intro';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#231C27'}}>
      <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/aboutus'
            element={<AboutUs />}
          />
          <Route
          path='/intro'
          element={<Intro />}
          />
        </Routes>
      </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
