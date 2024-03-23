import { useState } from 'react';
import { TodoProvider } from "./contexts"


function App() {
  
  const [todos, setTodos] = useState([])

      useEffect(() => {    // reload huda page
            const getLocalStorage = JSON.parse(localStorage.getItem("todos"));

            if(getLocalStorage && getLocalStorage > 0){
              setTodos(getLocalStorage);
            }
            
      }, []);


      useEffect(() => { //todos ma kei change hudai tya localStorage ma set gardini
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos]);




  const addTodo = (todo) => {
    setTodos([...todos, {id: Date.now(), ...todo}])
  }

  const updatedTodo = (id, todo) => {
    const updatedTodos = todos.map((elem) => {
      if(elem.id === id){
        return {...elem, todo}
      }else{
        return elem
      }
    });

    setTodos(updatedTodos);
  }

  const deleteTodo = (id) => {
    const deleteTodos = todos.filter((elem) => {
      if(id !== elem.id){
        return elem;
      }
    });
    setTodos(deleteTodos);
  }


  const toggleComplete = (id) => {
    const toggleCompletes = todos.map((elem) => {
      if(elem.id === id){
        return { ...elem, completed: !elem.completed }
      }else{
        return elem;
      }
    });

    setTodos(toggleCompletes);
  } 

  
  return (


    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
