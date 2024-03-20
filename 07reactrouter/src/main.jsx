import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([ //nesting routes Home vitra about us, contact us rakhexam yeta
  {
    path: '/',
    element: <Layout  />,
    children: [
      { 
        path: "",             // "/" ma janxa tyo home ho
        element: <Home />
      },
      {
        path: "about",        // "/about" ma janxa
        element: <About />
      },
      {
        path: "contact",       // "/contact" ma janxa
        element: <Contact />
      }
    ]
  },

])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider   router={router} />

  </React.StrictMode>,
)
