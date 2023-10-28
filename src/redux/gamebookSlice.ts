import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IGameBookState } from '../types';
import { introduction } from '../config';
import { RootState } from './store';

const initialState: IGameBookState = {
    authorName: 'Joe Doe',
    gamebookTitle: 'New Journey of Hobbits',
    introduction,
    selectedId: undefined,
    chapters: [],
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

export const getMetadata = (state: RootState) => {
    const { authorName, gamebookTitle, introduction } = state.gamebook;
    return { authorName, gamebookTitle, introduction };
};

export const { setGamebookMetadata } = gamebookSlice.actions;
export default gamebookSlice.reducer;
