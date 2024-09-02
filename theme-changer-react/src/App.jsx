import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import { Container } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { myTheme } from "./features/Theme";

function App() {
  console.log(import.meta.env.VITE_URL)
  const data = useContext(myTheme)
  console.log(data)
   return (
    <>
    <ToastContainer
    position="bottom-left"
    autoClose={2000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="colored"
    />
        <Header/>
        <Outlet/>   
    </>
  )
}

export default App
