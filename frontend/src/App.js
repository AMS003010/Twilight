import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomeContent from './components/homeScreenContent'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={<HomeContent/>}
          />
        </Routes>
      </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
