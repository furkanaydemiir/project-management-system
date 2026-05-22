import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("projects")
  ? JSON.parse(localStorage.getItem("projects"))
  : [];
  export const projectSlice = createSlice({
    name:'project',
    initialState,
    reducers:{
      addProject(state,action){
        state.push(action.payload)
        localStorage.setItem("projects",JSON.stringify(state));
      }
    }
})
export const { addProject } = projectSlice.actions
export default projectSlice.reducer


