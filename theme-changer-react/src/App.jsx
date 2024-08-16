import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import { Container } from "react-bootstrap"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  console.log(import.meta.env.VITE_URL)
   return (
    <>
    <ToastContainer
    position="bottom-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable
    pauseOnHover={false}
    theme="colored"
    />
    <Header/>
    <Container>
        <Outlet/>
    </Container>
    
    </>
  )
}

export default App
