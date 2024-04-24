import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
    name: 'note',
    initialState:{
        notes: [],
    },
    reducers:{
        setNotes(state, action){
            state.notes = action.payload;
        },
        deleteNote(state, action) {
            state.notes = state.notes.filter((p) => p._id !== action.payload);
          },
    }
})

const noteReducer = noteSlice.reducer;
const noteActions = noteSlice.actions;

export { noteActions, noteReducer };