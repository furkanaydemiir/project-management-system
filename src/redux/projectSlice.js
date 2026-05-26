import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("projects")
  ? JSON.parse(localStorage.getItem("projects"))
  : [];

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject(state, action) {
      state.push({ ...action.payload, status: 'Atama bekliyor', assignedTeamId: null });
      localStorage.setItem("projects", JSON.stringify(state));
    },
    updateProject(state, action) {
      const index = state.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
        localStorage.setItem("projects", JSON.stringify(state));
      }
    },
    deleteProject(state, action) {
      const newState = state.filter(p => p.id !== action.payload);
      localStorage.setItem("projects", JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addProject, updateProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;


