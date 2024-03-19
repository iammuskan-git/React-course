import React from 'react'

function App() {
  return (
    <>
      <div className='bg-white w-full h-screen p-28 rounded-lg'>
          <div className='bg-blue-500 w-96 h-96 mx-96 p-4 rounded-sm'>
                <input type="text" placeholder='Add a items' />
                <button className='bg-green-400 text-blue w-9'>+</button>
          </div>
      </div>
    </>
  )
}

export default App
