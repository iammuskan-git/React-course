import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements , Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , { getApiLoader }from './components/Github/Github.jsx'

// const router = createBrowserRouter([ //nesting routes Home vitra about us, contact us rakhexam yeta
//   {
//     path: '/',
//     element: <Layout  />,
//     children: [
//       { 
//         path: "",             // "/" ma janxa tyo home ho
//         element: <Home />
//       },
//       {
//         path: "about",        // "/about" ma janxa
//         element: <About />
//       },
//       {
//         path: "contact",       // "/contact" ma janxa
//         element: <Contact />
//       }
//     ]
//   },

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />

        {/* <Route path="about" element={<About />}>        
            <Route path="us" element={<AboutUs />}/>      // "/about/us" jhan nested vayo home vitra ni about ani about vitra ni us
        </Route> */}

      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route 
          loader= { getApiLoader }    // loader API call ko lagi use hunxa (github link ma Click nagardai pailai fetch hunxa ani cache ma ni rakhxa loader le chai khyal garni)
          path="github" 
          element={<Github />} 
          />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider   router={router} />

  </React.StrictMode>,
)
