import { createAsyncThunk, createSlice,nanoid } from "@reduxjs/toolkit"

export const addUserToAPI = createAsyncThunk('user/addUserToAPI',async(user,{rejectWithValue})=>{
    try{
        let res = await fetch("https://66e8004db17821a9d9dae728.mockapi.io/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({...user,uniqueid:nanoid()})
        })
        if(!res.ok){throw new Error('Failed to add user')}
        else {
            let data =await res.json()
            return data
        }
    }
    catch(error){
        return rejectWithValue(error.message)
    }
})

const userSlice = createSlice({
name:"user",
initialState:{users:[],error:null,loading:false},
reducers:{//pure functions
    // ADD_USER:(state,action)=>{
    //     console.log("add user",action.payload)
    //     state.users.push(action.payload)
    // },
    REMOVE_USER(state,action){}
},
extraReducers:(builder)=>{
    builder.addCase(addUserToAPI.pending,(state,action)=>{
        state.error=null;state.loading=true })
        .addCase(addUserToAPI.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.users.push(action.payload)
        })
        .addCase(addUserToAPI.rejected,(state,action)=>{
            state.error = action.payload;state.loading=false
        })
}
})
// export const {ADD_USER,REMOVE_USER} = userSlice.actions
export const {REMOVE_USER} = userSlice.actions
// console.log(userSlice.actions)

export default userSlice
export const selectUsers=(state)=>state.user.users