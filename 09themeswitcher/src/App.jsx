import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  
////// yeta dekhi 
        const [themeMode, setThemeMode] = useState("light");

        const darkTheme = () => {
          setThemeMode("dark");
        }

        const lightTheme = () => {
          setThemeMode("light");
        }


        useEffect(() => {
          document.querySelector("html").classList.remove("dark", "light");   // suru ma sab remove gareko
          document.querySelector("html").classList.add(themeMode)              // ani data pass garni setThemeMode ma j xa tei add hunxa ThemeMode ma
        } , [themeMode]);
////// yeta samma khyal garni



  return (
    
    
    <ThemeProvider  value={ { themeMode, darkTheme, lightTheme } }>    {/* yo yo value use garna pauxa tala ko components le */}


         <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

                        <ThemeBtn />                                                    {/* ThemeBtn Components */}

                          </div>

                    <div className="w-full max-w-sm mx-auto">

                        <Card />                                                        {/* Card Components */}
                        
                          </div>
            </div>
        </div>


    </ThemeProvider>

  )
}

export default App
