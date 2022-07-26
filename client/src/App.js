import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import { CoinProvider } from './context/CoinContext';
import About from './components/layout/About'
import Market from '../src/pages/Market';
import Crypto from './components/coins/Crypto/Crypto';
import Exchanges from './components/Exchanges/Exchanges';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Tabs from './components/layout/Tabs';

function App() {

  return (
    <CoinProvider>
      <Router>
        <Navbar />
        <main>
          <Tabs />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/crypto/:name' element={<Crypto />}/>
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/about' element={<About />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
      </Router>
    </CoinProvider>
  );
}

export default App;
