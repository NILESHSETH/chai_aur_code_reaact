import { Children } from 'react'
import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'


function Myapp(){
  return(
    <div>
      <h1>
        Made my custom app
      </h1>
    </div>
  )
}


const reactelement = {
  type: 'a', 
  props:{
          href: 'https://google.com',
          target:'_blank'
  },
  children:'click here to visit google'
}
const username = "nilesh kumar seth"
const anotherelement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const reactelement2 = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
)