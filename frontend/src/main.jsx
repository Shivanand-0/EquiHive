import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import ProductPage from './landing_page/product/ProductPage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
)
