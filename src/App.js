import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import { CoinProvider } from './context/CoinContext';
import About from './components/layout/About'
import Market from '../src/pages/Market';
import Crypto from './components/coins/Crypto/Crypto';

function App() {

  return (
    <CoinProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Main />}>
            </Route>
              <Route path='/crypto/:name' element={<Crypto />}/>
              {/* <Route path='/market' element={<Market />} /> */}
              <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </Router>
    </CoinProvider>
  );
}

export default App;
