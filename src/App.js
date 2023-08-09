import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import BlogState from './context/BlogState';
import Home from './components/Home';
import Adminlogin from './admin/Adminlogin';
import Adminpanel from './admin/Adminpanel';
function App() {
  return (
    <>
    
    <BlogState>
    <Router>
      <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/adminlogin' element={<Adminlogin/>} />
      <Route exact path='/adminpanel' element={<Adminpanel/>} />
      </Routes>
      </Router>
    </BlogState>
    </>
   
  )
}

export default App;
