
export interface userProfile {
    interes : string[];
    name: string;
    email: string;
    password:  string;
}

const initialState: userProfile = {
    interes : [],
    name: '',
    email: '',
    password:  '',
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<userProfile>) => {
            state.interes = action.payload.interes;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        } ,  
        clearUserProfile: () => initialState,
        
    }
});

export const { setUserProfile, clearUserProfile } = UserSlice.actions;

export default UserSlice.reducer;