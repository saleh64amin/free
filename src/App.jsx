import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWeight,
  faDumbbell,
  faHeartbeat,
  faChild,
  faAppleAlt,
  faCheck,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBars,
  faTimes,
  faHeart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramsSlider from './components/ProgramsSlider';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add FontAwesome icons to library
library.add(
  faWeight,
  faDumbbell,
  faHeartbeat,
  faChild,
  faAppleAlt,
  faCheck,
  faWhatsapp,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBars,
  faTimes,
  faFacebook,
  faInstagram,
  faHeart,
  faStar
);

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #2ecc71;
    --secondary-color: #27ae60;
    --accent-color: #f1c40f;
    --text-color: #2c3e50;
    --light-bg: #f8f9fa;
    --card-shadow: 0 10px 20px rgba(0,0,0,0.1);
    --hover-shadow: 0 15px 30px rgba(0,0,0,0.15);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --container-width: 1200px;
    --container-padding: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
  }

  body {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    direction: rtl;
    overflow-x: hidden;
    background: var(--light-bg);
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  section {
    width: 100%;
    padding: 80px 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--light-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
  }

  /* Selection Color */
  ::selection {
    background: var(--primary-color);
    color: white;
  }

  /* Swiper Styles */
  .swiper {
    width: 100%;
    padding: 50px var(--container-padding);
    overflow: visible;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: auto;
    transition: transform 0.3s;
  }

  .swiper-slide-active {
    transform: scale(1.05);
  }

  .swiper-button-next,
  .swiper-button-prev {
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: var(--card-shadow);

    &::after {
      font-size: 1.2rem;
      color: var(--primary-color);
    }

    &:hover {
      background: var(--primary-color);
      &::after {
        color: white;
      }
    }
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: var(--primary-color);
    opacity: 0.3;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--primary-color);
    transform: scale(1.2);
  }

  .app-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--light-bg);
  }

  .section-background {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  }

  @media (max-width: 768px) {
    :root {
      --container-padding: 1rem;
    }

    html {
      font-size: 14px;
    }

    .swiper {
      padding: 30px var(--container-padding);
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

function App() {
  return (
    <div className="app-container">
      <GlobalStyle />
      <div className="section-background">
        <Navbar />
        <Hero />
        <ProgramsSlider />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
