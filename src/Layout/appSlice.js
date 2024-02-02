import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({ //module 
    name:"app", //creating module name app 
    initialState:{
        isMenuOpen:false,

    },
    reducers : { //reducer is used for actions
        toggleMenu:(state)=>{ //function body of  anonoumus and state is variable 
            state.isMenuOpen=!state.isMenuOpen; //action 

        },
    },
})
export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;

//useDispathch  to used for conncet react to redux
//useSelector to used for conncet ack from redux to react //hook selector 