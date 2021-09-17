import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    latlng: {
      lat: 5.812536662946469,
      lng: 102.13168633068325,
    },
    suggestionLists: [],
    searchHistory: [],
  },
  reducers: {
    getSuggestions: (state, action) => {},
    getSuggestionsSuccess: (state, action) => {
      state.suggestionLists = [...action.payload];
    },
    getSuggestionsFail: (state, action) => {},
    getSelectedLatlng: (state, action) => {},
    getSelectedLatlngSuccess: (state, action) => {
      state.latlng = action.payload;
    },
    getSelectedLatlngFail: (state, action) => {},
    addNewSearchHistory: (state, action) => {
      state.searchHistory = [...state.searchHistory, action.payload];
    },
  },
});

export const {
  setNewLatlng,
  addNewSearchHistory,
  getSuggestions,
  getSuggestionsSuccess,
  getSuggestionsFail,
  getSelectedLatlng,
  getSelectedLatlngSuccess,
  getSelectedLatlngFail,
} = mapSlice.actions;

export default mapSlice.reducer;
