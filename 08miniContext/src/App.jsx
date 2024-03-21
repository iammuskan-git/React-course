import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  

  return (
    <UserContextProvider>
        <h1>This below components will only get access to use this useContext</h1>
    
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default App
