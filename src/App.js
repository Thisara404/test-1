import './App.css';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navebartext'>
              TECHNO PAL
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 text'>
            <NavLink to='/' className={({ isActive }) => isActive? 'nav-link text-uppercase active navtext' : 'nav-link text-uppercase navtext'}>Home</NavLink>
            <NavLink to='/menu' className={({ isActive }) => isActive? 'nav-link text-uppercase active navtext' : 'nav-link text-uppercase navtext'}>Menu</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive? 'nav-link text-uppercase active navtext' : 'nav-link text-uppercase navtext'}>About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive? 'nav-link text-uppercase active navtext' : 'nav-link text-uppercase navtext'}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Ionut Cora</p>
      </footer>
    </div>
  );
}

export default App;
