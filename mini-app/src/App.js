import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Layout from './components/Layout';
import Detail from './pages/Detail';

function App() {
  return (
   
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='detail' element={<Detail />} />
              <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
  );
}

export default App;
