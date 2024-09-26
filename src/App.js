import './App.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import AdminPanel from './pages/admin/AdminPanel';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/admin' && (
        <Navbar expand="lg" className='position-absolute w-100'>
          <Container>
            <Navbar.Brand>
              <Link to="/" className='navbar-brand d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-bus-front" viewBox="0 0 16 16">
                  <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44 44 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43 43 0 0 0 8 3" />
                  <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A44 44 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A43 43 0 0 1 8 1" />
                </svg>
                <span className='mx-2 text-light lh-1 fw-semibold'>
                  Ынтымак
                </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto justify-content-end w-100'>
                <Nav.Link href='/' className='text-uppercase'>Главная</Nav.Link>
                <Nav.Link href='/about' className='text-uppercase'>О нас</Nav.Link>
                <Nav.Link href='/blog' className='text-uppercase'>Наши продукты</Nav.Link>
                <Nav.Link href='/contact' className='text-uppercase'>Связаться</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Связаться</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.706.24-1.485.276-.843.038-1.096.046-3.232.046s-2.389-.008-3.232-.046c-.78-.035-1.203-.166-1.485-.276a2.46 2.46 0 0 1-.92-.598 2.46 2.46 0 0 1-.598-.92c-.11-.281-.24-.705-.276-1.485-.038-.843-.046-1.096-.046-3.232s.008-2.389.046-3.232c.035-.78.166-1.204.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.281-.11.705-.24 1.485-.275.843-.039 1.096-.047 3.232-.047zm-.002 2.71a3.849 3.849 0 1 0 0 7.697 3.849 3.849 0 0 0 0-7.697zm0 6.354a2.505 2.505 0 1 1 0-5.009 2.505 2.505 0 0 1 0 5.01zm5.01-6.528a.902.902 0 1 1-1.803 0 .902.902 0 0 1 1.803 0z" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                </Link>
              </ul>
            </div>
            <div className='col-md-4'>
              <ul className='footer-links list-unstyled'>
                <Link to="/" className='text-decoration-none'><li>Главная</li></Link>
                <Link to="/about" className='text-decoration-none'><li>О нас</li></Link>
                <Link to="/blog" className='text-decoration-none'><li>Новости</li></Link>
                <Link to="/contact" className='text-decoration-none'><li>Связаться</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

