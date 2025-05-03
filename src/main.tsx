import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/animations.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);