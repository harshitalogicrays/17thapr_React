import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const filterSlice =createSlice({
name:'filter',
initialState:{filterProducts:[],searchval:'',catval:'',priceval:''},
reducers:{
    FILTER_BY_SEARCH(state,action){
        let {products,search}=action.payload
        if(search !=''){
            let filters = products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
            state.filterProducts = filters
        }
        state.searchval = search},
    FILTER_BY_CATEGORY(state,action){
        let {products,category}=action.payload
        if(category !=''){
            let filters = products.filter(item=>item.category==category)
            state.filterProducts = filters
        }
        state.catval = category
    },
    FILTER_BY_PRICE(state,action){
        let {products,price}=action.payload
        if(price !=''){
            let filters = [...products].sort((a,b)=>{return price=='ltoh' ? a.price -b.price : b.price-a.price})
            state.filterProducts = filters
        }
        state.priceval = price
    }
}})
export const {FILTER_BY_SEARCH,FILTER_BY_CATEGORY,FILTER_BY_PRICE} =  filterSlice.actions
export default filterSlice.reducer
export const selectFilterProducts = state =>state.filter.filterProducts
export const selectSearch = state=>state.filter.searchval
export const selectCatgory = state=>state.filter.catval
export const selectPrice= state=>state.filter.priceval