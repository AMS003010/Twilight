import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { UseUserContext } from './hooks/useUserContext';

//import Home from './pages/home';
import AboutUs from './pages/about us';
import Login from './pages/login';
import SignUp from './pages/sign up';
import Explore from './pages/explore';
import Intro from './pages/intro';
//import CreateSong from './components/SongUploader';
//import PlaylistUploader from './components/PlaylistUploader';

function App() {
  const {user} = UseUserContext()
  return (
    <div className="App" style={{backgroundColor: '#231C27'}}>
      <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={<Explore />}
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
            element={!user ? <Login /> : <Intro />}
          />
          <Route
            path='/signup'
            element={!user ? <SignUp /> : <Intro />}
          />
        </Routes> 
      </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
