import { createSlice } from "@reduxjs/toolkit";

const initialUsers = [
  {
    id: "1",
    name: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    role: "admin",
    isActive: true
  },
  {
    id: "2",
    name: "Ayşe Demir",
    email: "ayse@example.com",
    role: "editor",
    isActive: false
  },
  {
    id: "3",
    name: "Can Kaya",
    email: "can@example.com",
    role: "user",
    isActive: true
  },
  {
    id: "4",
    name: "Zeynep Çelik",
    email: "zeynep@example.com",
    role: "user",
    isActive: true
  },
  {
    id: "5",
    name: "Burak Yılmaz",
    email: "burak@example.com",
    role: "user",
    isActive: true
  }
];

const initialState = {
  users: initialUsers,
  teams: localStorage.getItem("teams") ? JSON.parse(localStorage.getItem("teams")) : []
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addTeam(state, action) {
      state.teams.push(action.payload);
      localStorage.setItem("teams", JSON.stringify(state.teams));
    },
    deleteTeam(state, action) {
      state.teams = state.teams.filter(team => team.id !== action.payload);
      localStorage.setItem("teams", JSON.stringify(state.teams));
    },
    updateTeam(state, action) {
      const index = state.teams.findIndex(team => team.id === action.payload.id);
      if (index !== -1) {
        state.teams[index] = action.payload;
        localStorage.setItem("teams", JSON.stringify(state.teams));
      }
    }
  }
});

export const { addTeam, deleteTeam, updateTeam } = teamSlice.actions;
export default teamSlice.reducer;
