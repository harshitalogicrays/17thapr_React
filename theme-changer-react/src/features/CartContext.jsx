import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
const mycartcontext = React.createContext()
const CartContext = ({children}) => {
    const [cartItems,setCartItems]=useState([])
    const [total,setTotal]=useState(0)
    let addtocart=(product)=>{
        // console.log("Add to cart",product)
        if(sessionStorage.getItem('17aprlogin') != undefined){
            let itemIndex = cartItems.findIndex(item=>item.id==product.id)
            if(itemIndex == -1){
                setCartItems([...cartItems,{...product,qty:1}])
                toast.success(`${product.name} added to cart`)
            }
            else toast.info(`${product.name} already added to cart`)   }
        else 
        toast.error("please login first")
       
    }
    let increase=()=>{}
    let decrease=()=>{}
    let removefromcart=()=>{}
    let emptycart=()=>{}
    let calculatetotal=()=>{}
  return (
    <mycartcontext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculatetotal}}>
        {children}
    </mycartcontext.Provider>
  )
}

export default CartContext

export const useMyContext= ()=>useContext(mycartcontext)