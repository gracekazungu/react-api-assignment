// import logo from './logo.svg';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Login from './Login';
import Navigationbar from './Navigationbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
// import addProduct from './Addproduct/addproduct';
function App() {
  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
        {/* <Route path='/addproduct' element={<Addproduct/>}/> */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;


