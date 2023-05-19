import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
};

// Define the reducers
const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }

      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export the action (to set/change the state)
export const { setToken, setIsLoggedIn, setUser } = authSlicer.actions;

// Export the reducers (state / store)
export default authSlicer.reducer;
