import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
  <Header/>
  </>
)