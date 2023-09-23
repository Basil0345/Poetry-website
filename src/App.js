import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Posts from './pages/Posts/posts';
import Post from './pages/Post/Post';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Posts />} path='/poems' />
          <Route element={<Post />} path='/poems/:slug' />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
