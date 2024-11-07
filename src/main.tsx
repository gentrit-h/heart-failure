// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
// import "supertokens-auth-react/style.css";
import './index.css'; // Import Tailwind CSS


const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename='/heart-failure'>
      <App /> 
    </BrowserRouter>
  </StrictMode>,
);