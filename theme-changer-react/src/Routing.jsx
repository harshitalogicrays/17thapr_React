import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Pagenotfound from './pages/Pagenotfound';
import Products from './features/Products';

export const myrouter = createBrowserRouter([
    {path:'/' ,element:<App/>,
    children:[
        {path:'',element:<Home/>},
        {path:'register',element:<Register/>},
        {path:'login',element:<Login/>},
        {path:'products',element:<Products/>},
    ]},
    {path:"*",element:<Pagenotfound/>}
  ]);


