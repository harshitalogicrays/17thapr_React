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
import AddCategory from './features/Admin/AddCategory';
import ViewCategory from './features/Admin/ViewCategory';
import AddSlider from './features/Admin/AddSlider';
import ViewSlider from './features/Admin/ViewSlider';
import AddProduct from './features/Admin/AddProduct';
import ViewProduct from './features/Admin/ViewProduct';
import Theme from './features/Theme';
import Cart from './features/Cart';
import CartContext from './features/CartContext';
import { fetchData } from './features/loaderproductapi';

export const myrouter = createBrowserRouter([
    {path:'/' ,element:<Theme><CartContext><App/></CartContext></Theme>,
    loader:fetchData,
    errorElement:<Pagenotfound/>,
    children:[
        {path:'',element:<Home/>},
        {path:'register',element:<Register/>},
        {path:'login',element:<Login/>},
        {path:'products',element:<Products/>},
        {path:'cart',element:<Protected><Cart/></Protected>},
    ]},

    {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'',element:<Dashboard/>},
            {path:'add/category',element:<AddCategory/>},
            {path:'edit/category/:id',element:<AddCategory/>},
            {path:'view/category',element:<ViewCategory/>},
            {path:'add/slider',element:<AddSlider/>},
            {path:'edit/slider/:id',element:<AddSlider/>},
            {path:'view/slider',element:<ViewSlider/>},
            {path:'add/product',element:<AddProduct/>},
            {path:'edit/product/:id',element:<AddProduct/>},
            {path:'view/product',element:<ViewProduct/>},
        ]
    },

    {path:"*",element:<Pagenotfound/>}
  ]);


