import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Pagenotfound from './pages/Pagenotfound';
import Products from './features/Products';
import AdminLayout from './features/Admin/AdminLayout';
import Dashboard from './features/Admin/Dashboard';
import { Protected, ProtectedAdmin } from './features/hiddenlinks';

export const myrouter = createBrowserRouter([
    {path:'/' ,element:<App/>,
    children:[
        {path:'',element:<Home/>},
        {path:'register',element:<Register/>},
        {path:'login',element:<Login/>},
        {path:'products',element:<Protected><Products/></Protected>},
    ]},

    {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'',element:<Dashboard/>}
        ]
    },

    {path:"*",element:<Pagenotfound/>}
  ]);


