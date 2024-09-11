import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import Products from "./features/Products";
import About from "./features/About";
import Register from "./features/Register";
import Login from "./features/Login";

const router = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'', element:<Home/>},
            {path:'about', element:<About/>},
            {path:'products', element:<Products/>},
            {path:'register', element:<Register/>},
            {path:'login',element:<Login/>}
        ]
    }
])
export default router