import { useState, useEffect } from 'react'

// useEffect for localStorage ko lagi setItem in local storage [[[everytime items is changed]]]

// get all data from localStorage 
const getLocalStorageData = () => {
    //localStorage ma string ma hunxa data aba telai array leuna pary JSON.parse le leuna ta Object ma leuxa tara kei hunna array ma update hunxa
    let lists = localStorage.getItem("lists");
    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}

function ToDo() {

    const [input, setInput] = useState("");   // yo GET 
    const [items, setItems] = useState(getLocalStorageData());   // Yo CREATE in array and ADD items

// CREATE
    const AddItems = () => {
// READ
        if(!input){                        // Get
            alert("Please fill the data")
        }else{
            setItems([...items, input]);         // Create
            setInput("");
        }
    }
// UPDATE
    const UpdateItems = (index) => {
       
            items.map((elemValue, id) => {
                if(index === id){
                    setInput(elemValue);
                    elemValue = input;
                }
            })
            setItems(items);
            setInput("");
        
    }

// DELETE
    const DeleteItems = (index) => {
        const deletedItems = items.filter((elemValue, id) => {
            return index !== id;
        })
        setItems(deletedItems);
    }
    
//DELETE ALL
    const RemoveAll = () => {
        setItems([]);
    }

// CREATE IN localStorage
// for localStorage ko lagi useEffect (jaile ni localstorage ma {{{string}}} ma save hunxa tei vayera items(array) lai string ma convert gareko ho)
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items));
    }, [items]);



  return (
    <>


      <div className='bg-white w-full h-screen p-28 rounded-lg'>



          <div className='bg-blue-500 w-96 h-96 mx-96 p-4 rounded-sm'>

            <h1 className='text-center text-white font-bold'>ToDo List</h1>
               
               <div className='flex p-2'>
               <input   type="text" 
                        placeholder='Add a items' 
                        value={input}
                        onChange={(event)=> setInput(event.target.value)
                        }
               />
                <button className='bg-white text-black'><i className="fa-solid fa-plus" 
                onClick={AddItems}></i>
                </button>
               </div>
                

            <div className="bg-white my-5">
                {
                items.map((elemValue, index)=> (
                                                                            // yo khyal gara hai key={index}
                    <div className="flex items-center justify-between my-3" key={index}>
                    <h2 className="ml-2">{elemValue}</h2>
                    <div className="flex">
                        <button className="ml-4"><i className="fa-solid fa-pen" onClick={() => UpdateItems(index) }></i></button>
                                                                                            {/* id wala ma () => {} hai  */}
                        <button className="ml-4"><i className="fa-solid fa-trash" onClick={() => DeleteItems(index) }></i></button>     
                    </div>
                    </div>
                )
                )
            }
            </div>




                  <div className='flex justify-center'>
                  <button className='bg-white text-black px-6 h-9' onClick={RemoveAll}>REMOVE ALL</button>
                  </div>

          </div>

        
            
            
      </div>



    </>
  )
}

export default ToDo
