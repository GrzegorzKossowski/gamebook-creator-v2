import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IGameBookState } from '../types';

const initialState: IGameBookState = {
  authorName: '',
  gamebookTitle: '',
  introduction: '',
  selectedId: undefined,
  chapters: []
};

export const gamebookSlice = createSlice({
    name: 'gamebook',
    initialState,
    reducers: {
        setGamebookMetadata: (state, action: PayloadAction<any>) => {
            console.log(`setGamebookMetadata`);
        },
    },
});

export const { setGamebookMetadata } = gamebookSlice.actions;
export default gamebookSlice.reducer;
