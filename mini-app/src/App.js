import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Layout from './components/Layout';
import Detail from './pages/Detail';
import Blogpage from './pages/Blogpage';
import SimpelDet from './pages/SimpelDet';
import { CreateBlog } from './pages/CreateBlog';
import EditePost from './pages/EditePost';


function App() {
  return (
   
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='blogs' element={<Blogpage />} />
              <Route path='blogs/:id' element={<SimpelDet />} />
              <Route path='blogs/new' element={<CreateBlog />} />
              <Route path='blogs/:id/edit' element={<EditePost />} />
              <Route path='detail' element={<Detail />} />
              <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
  );
}

export default App;
