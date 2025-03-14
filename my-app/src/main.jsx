import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./components/HomePage.css"; 
import "./components/AboutPage.css"; 
import "./components/NumberPage.css";
// import Baner from "./components/Baner.jsx"; 
// import Howtofindus from "./components/Howtofindus.jsx"; 


import './reset.css'
import './base/typography.css';
import Footer from './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    </>
  </StrictMode>,
)
