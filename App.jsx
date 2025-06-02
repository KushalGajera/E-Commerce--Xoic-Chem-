import React, { useState, createContext } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Header } from './compontes/Header/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Services } from './Pages/Services';
import { About } from './Pages/About';
import { Blog } from './Pages/Blog';
import { Footer } from './compontes/Footer';
import { ProductList } from './Pages/ProductList/Index';
import { ProductDetails } from './Pages/ProductDetails/index';
import HelpCenter from './Pages/HelpCenter/HelpCenter';
import OrderTrack from './Pages/OrderTrack/OrderTrack';
import SignIn from './Pages/Login/Login';
import Register from './Pages/Login/Register';


import { ProductQuickViewDialog } from './Pages/ProductQuickViewDialog/ProductQuickViewDialog'; 
import bg1 from '/src/assets/products/bg-1.png'; // Dummy image


const MyContext = createContext();

function App() {

  const [Openproductdetailsmodel, setOpenproductdetailsmodel] = useState(true);

  const handleCloseOpenproductdetailsmodel = () => {
    setOpenproductdetailsmodel(false);
  };

  // Dummy product (replace with real selected product later)
  const dummyProduct = {
    id: 1,
    name: 'Glass Cleaner',
    price: 70,
    weights: ['500ml', '1L', '5L'],
    description: 'Sparkling finish on glass and mirrors.',
    images: [bg1]
  };

  return (
    <>
      <BrowserRouter>
        <MyContext >
          <Header />
          <Routes>
            <Route path={'/'} exact={true} element={<Home />} />
            <Route path={'/ProductList'} element={<ProductList />} />
            <Route path={'/Product/:id'} element={<ProductDetails />} />

            <Route path={'/HelpCenter'} element={<HelpCenter />} />
            <Route path={'/OrderTrack'} element={<OrderTrack />} />

            <Route path={'/SignIn'} element={<SignIn />} />
            <Route path={'/Register'} element={<Register />} />

            <Route path={'/Services'} element={<Services />} />
            <Route path={'/About'} element={<About />} />
            <Route path={'/Contact'} element={<Contact />} />
            <Route path={'/Blog'} element={<Blog />} />
          </Routes>

          <Footer />
        </MyContext>
      </BrowserRouter>

      {/* Product Quick View Dialog */}
      {/* <ProductQuickViewDialog
        open={Openproductdetailsmodel}
        onClose={handleCloseOpenproductdetailsmodel}
        product={dummyProduct}
      /> */}
    </>
  )
}

export default App
