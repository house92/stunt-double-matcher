import { createSlice } from '@reduxjs/toolkit';

import stuntDoubles from '../data/stuntDoubles.json';

const deckSlice = createSlice({
  name: 'deck',
  initialState: { stuntDoubles },
  reducers: {
    removeFromDeck: state => {
      const newStuntDoubles = [...state.stuntDoubles];
      newStuntDoubles.shift();
      return {
        ...state,
        stuntDoubles: newStuntDoubles,
      };
    },
    moveToBottomOfDeck: state => {
      const newStuntDoubles = [...state.stuntDoubles];
      newStuntDoubles.push(newStuntDoubles.shift());
      return {
        ...state,
        stuntDoubles: newStuntDoubles,
      };
    }
  },
});

export const { removeFromDeck, moveToBottomOfDeck } = deckSlice.actions;

export default deckSlice;
