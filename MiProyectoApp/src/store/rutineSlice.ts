

export interface rutineProfile {
    nombreRutina: string;
    Descripcion: string;
    NumSeries: string;
    NumRepeticiones: string;
    DiasSemana: string;
    selectedIds: string[];
}

const initialState: rutineProfile = {
    nombreRutina: '',
    Descripcion: '',
    NumSeries: '',
    NumRepeticiones: '',
    DiasSemana: '',
    selectedIds: []
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const rutineSlice = createSlice({
    name: 'rutine',
    initialState,
    reducers: {
        setRutineProfile: (state, action: PayloadAction<rutineProfile>) => {
            state.nombreRutina = action.payload.nombreRutina;
            state.Descripcion = action.payload.Descripcion;
            state.NumSeries = action.payload.NumSeries;
            state.NumRepeticiones = action.payload.NumRepeticiones;
            state.DiasSemana = action.payload.DiasSemana;
            state.selectedIds = action.payload.selectedIds;
        } ,  
        clearRutineProfile: () => initialState,
        
    }
});

export const { setRutineProfile, clearRutineProfile } = rutineSlice.actions;

export default rutineSlice.reducer;
