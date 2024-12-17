import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInputName: '',
  },
  reducers: {
    setUserInputName(state, action) {
      state.userInputName = action.payload;
    },
  },
});

// Export the action creator
export const { setUserInputName } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
