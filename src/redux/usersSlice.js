import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, // Stores the currently logged-in user's data
  isAuthenticated: false, // Boolean to track if a user is logged in
  users: [], // List of all users (optional, can be used for user management if needed)
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      if (state.currentUser && state.currentUser.id === action.payload.id) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { login, logout, updateUser, addUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
