import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie';
import axios from "axios";
import './index.css'
import {Login, Signup} from './landing_page/signup/index.js'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import ProductPage from './landing_page/product/ProductPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound.jsx';


// Force all axios requests to send cookies
axios.defaults.withCredentials = true;

// Force the base URL so you don't have to type it every time
// CHANGE THIS to match your backend port (4000)
axios.defaults.baseURL = "http://localhost:4000";

createRoot(document.getElementById('root')).render(
  <>
  <CookiesProvider>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </CookiesProvider>
  </>
)
