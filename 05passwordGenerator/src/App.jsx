import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //3) useRef hook  => UI ramro banauna ko lagi reference ligeko ho
  const passwordRef = useRef(null);



  //1) useCallback hook  => optimatization garna ko lagi
  const passwordGenerator = useCallback(() => {
    //1
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //2
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+{}[]:;,./?~";

    //3
    for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }

    //4
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]) // yo dependencies array ma k k dependent xa ta password generate garna


  //4) useRef hook yeta use vaxa select garna ko lagi natra ta copy ta vaisakhye thiye
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 100);
  window.navigator.clipboard.writeText(password);
}, [password])




  //2) useEffect hook => j pani array ma vako change garda ya click garda tyo passwordGenerator function Rerun hunxa, Reload hunxa
  useEffect(()=> { 
    passwordGenerator()   
  }, 
  [length, numberAllowed,charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center my-5'> Password Generator </h1>
    
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text"
                   value={password}
                   className='w-full py-2 px-3 outline-none'
                   placeholder="Password"
                   readOnly
                   ref={     passwordRef          }
              />
            <button 
            onClick={    copyPasswordToClipboard    }
            className=' outline-none bg-blue-700
             text-white px-3 py-0.5'>copy by useRef Hook</button>
        </div>


        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                     min={6}
                     max={100}
                     value={length}
                     className='cursor-pointer'
                     onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                     defaultChecked={numberAllowed}
                     onChange={() => { 
                      setNumberAllowed((prev) => !prev);
                    }}
              />
              <label>Numbers</label>
            </div>
            
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                     defaultChecked={charAllowed}
                     onChange={() => { 
                      setCharAllowed((prev) => !prev);
                    }}
              />
              <label>Characters</label>
            </div>

        </div>


      </div>
    </>
  )
}

export default App
