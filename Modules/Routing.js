import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/products';
import ProductDetails from './Pages/productsdetails';
import { Navbar } from 'react-bootstrap-v5';

function Routingpage() {
  return (
    <div className="routing">
      <BrowserRouter>
        <Navbar className='bg-dark container-fluid'>
          <h1 className='text-white mx-5'>Routing</h1>
          <ul className='ms-auto navbar-nav col-md-4'>
          <li className='class-item'><a className='nav-link text-white fw-bold h4' href='/'>Home</a></li> 
          <li className='class-item'><a className='nav-link text-white fw-bold h4' href='/About'>About</a></li> 
          <li className='class-item'><a className='nav-link text-white  fw-bold h4' href='/Products'>Products</a></li> 
          </ul>
         
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id"  element={<ProductDetails />}/>
          <Route path="/products" element={ <Products />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routingpage;