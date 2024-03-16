import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank'},
  'Visit Google from Vite React.CreateElement'
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement   //yeta components ya function call hunthiyo ni aba tyo jasari ni HTML object ma convert hudo raixa vane yesari call gareni document.createElement lai  
 
)
