import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UseUserContext } from './hooks/useUserContext';

//import Home from './pages/home';
import AboutUs from './pages/about us';
import Intro from './pages/intro';
import Login from './pages/login';
import SignUp from './pages/sign up';
import Profile from './pages/profile';
import ArtistInfo from './pages/artist';
import Search from './pages/search';
import Explore from './pages/explore';
import NoMatch from './pages/no match';

//import CreateSong from './components/SongUploader';
//import SongUpload from './components/uploadSong';
//import FirebaseImageUpload from './components/uploadSong';
//import PlaylistUploader from './components/PlaylistUploader';

function App() {
  const {user} = UseUserContext()

  return (
    <div className="App" style={{backgroundColor: '#231C27'}}>
      <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Explore />} />

          <Route path='aboutus' element={<AboutUs />} />

          <Route path='intro' element={<Intro />} />

          <Route path='login' element={!user ? <Login /> : <Intro />} />

          <Route path='signup' element={!user ? <SignUp /> : <Intro />} />

          <Route path='profile' element={<Profile/>} />

          <Route path="artists" element={<ArtistInfo/>}  >
            <Route path=":artistId" element={<ArtistInfo/>} />
          </Route>

          <Route  path='*' element={<NoMatch />} />
        </Routes> 
      </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
