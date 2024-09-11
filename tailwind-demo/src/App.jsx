import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Products from "./features/Products";
import Header from "./features/Header";
import { Outlet } from "react-router-dom";
function App() {
  <ToastContainer position="bottom-left" autoClose={3000} theme="colored"/>
  return (
 <>
  {/* <h1 className="text-red-700 font-bold bg-gray-700">Hello Tailwind</h1> */}

    <Header/>
    <Outlet/>
 </>
  )
}

export default App
