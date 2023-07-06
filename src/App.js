// import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Login from './Login';
// import Navigationbar from './Navigation/Navigationbar';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
// import addProduct from './Addproduct/addproduct';


function App() {
  return (
   <div>
      <BrowserRouter>
      <Link to="/">Login</Link>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/ProductDetails/:productId' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
