

export interface UserProfile {
    nombreRutina: string;
    Descripcion: string;
    NumSeries: string;
    NumRepeticiones: string;
    DiasSemana: string;
    selectedIds: string[];
}

const initialState: UserProfile = {
    nombreRutina: '',
    Descripcion: '',
    NumSeries: '',
    NumRepeticiones: '',
    DiasSemana: '',
    selectedIds: []
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<UserProfile>) => {
            state.nombreRutina = action.payload.nombreRutina;
            state.Descripcion = action.payload.Descripcion;
            state.NumSeries = action.payload.NumSeries;
            state.NumRepeticiones = action.payload.NumRepeticiones;
            state.DiasSemana = action.payload.DiasSemana;
            state.selectedIds = action.payload.selectedIds;
        } ,  
        clearUserProfile: () => initialState,
        
    }
});

export const { setUserProfile, clearUserProfile } = UserSlice.actions;

export default UserSlice.reducer;
