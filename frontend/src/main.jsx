import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './dist/css/main.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Api/contexts/AuthContext.jsx';  // Import AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>  {/* Bungkus aplikasi dengan AuthProvider */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
