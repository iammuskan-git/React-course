import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState("Black")

  return (
      <div className="w-full h-screen duration-200"
       style={{backgroundColor: color}}>
        
    <div className='fixed flex flex-wrap bottom-12 p-20'>
    
    <div className='flex flex-wrap bg-white gap-4 p-5 rounded-xl'>
    <button className="p-3 rounded-xl" onClick={()=> setColor("red")}  style={{backgroundColor: "red"}}>Red</button>
    <button className="p-3 rounded-xl" onClick={()=> setColor("yellow")}  style={{backgroundColor: "yellow"}}>Yellow</button>
    <button className="p-3 rounded-xl" onClick={()=> setColor("blue")}  style={{backgroundColor: "blue"}}>Blue</button>
    </div>
    </div>

      </div>
  )
}

export default App
