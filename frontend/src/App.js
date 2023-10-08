import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import AboutUs from './pages/about us';
import Intro from './pages/intro';
import Login from './pages/login';
import SignUp from './pages/sign up';
//import SongUpload from './components/uploadSong';
//import FirebaseImageUpload from './components/uploadSong';
//import SongUpload from './components/uploadSong';

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
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<SignUp />}
          />
        </Routes> 
      </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
