import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BlogState from './context/BlogState';
import blogcontext from "./context/blogcontext"
import Home from './components/Home';
import Adminlogin from './admin/Adminlogin';
import Adminpanel from './admin/Adminpanel';
import Events from './components/Events';
import Blog from './components/Blog';
import Team from './components/Team';
import Archives from './components/Archives';
import ShowBlog from './components/ShowBlog';
import Adminevent from './admin/Adminevent';
import Showevent from './components/Showevent';
import Adminarchive from './admin/Adminarchive';
function App() {
  const context=useContext(blogcontext);
  const {current,currentevent} =context;
  return (
    <>
    
    
    <Router>
      <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/adminlogin' element={<Adminlogin/>} />
      <Route exact path='/adminpanel' element={<Adminpanel/>} />
      <Route exact path='/events' element={<Events/>} />
      <Route exact path='/blogs' element={<Blog/>} />
      <Route exact path='/showblog' element={<ShowBlog blog={current}/>} />
      <Route exact path='/team' element={<Team/>} />
      <Route exact path='/archives' element={<Archives/>} />
      <Route exact path='/adminevent' element={<Adminevent/>} />
      <Route exact path='/showevent' element={<Showevent event={currentevent}/>} />
      <Route exact path='/adminarchive' element={<Adminarchive/>} />
      
      </Routes>
      </Router>
    
    </>
   
  )
}

export default App;
