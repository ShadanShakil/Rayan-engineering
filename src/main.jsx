import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from "@material-tailwind/react";


createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
  <StrictMode>
  <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
  </HeroUIProvider>
)
