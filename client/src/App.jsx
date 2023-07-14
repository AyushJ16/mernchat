import axios from "axios"
import {  UserContextProvider } from "./UserContext.jsx";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL='https://mernchatbackend-p9c0.onrender.com';
  axios.defaults.withCredentials=true;
  return (
    <UserContextProvider>
      <Routes />

    </UserContextProvider>
  )
}

export default App
