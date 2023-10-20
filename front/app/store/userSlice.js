import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
     name: 'user',
     initialState: null,
     reducers: {
          setUser: (state, action) => {
               // Verifica que action.payload sea un objeto serializable
               if (
                    typeof action.payload === 'object' &&
                    action.payload !== null
               ) {
                    return action.payload;
               } else {
                    // Si no es serializable, no realices ningún cambio en el estado
                    return state;
               }
          },
     },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
