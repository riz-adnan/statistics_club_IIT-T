import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BlogState from './context/BlogState';
import Home from './components/Home';
import Adminlogin from './admin/Adminlogin';
import Adminpanel from './admin/Adminpanel';
import Events from './components/Events';
import Blog from './components/Blog';
import Team from './components/Team';
function App() {
  return (
    <>
    
    <BlogState>
    <Router>
      <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/adminlogin' element={<Adminlogin/>} />
      <Route exact path='/adminpanel' element={<Adminpanel/>} />
      <Route exact path='/events' element={<Events/>} />
      <Route exact path='/blogs' element={<Blog/>} />
      <Route exact path='/team' element={<Team/>} />
      </Routes>
      </Router>
    </BlogState>
    </>
   
  )
}

export default App;
