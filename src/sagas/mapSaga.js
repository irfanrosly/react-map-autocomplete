import { call, put } from "redux-saga/effects";
import {
  getSuggestionsSuccess,
  getSelectedLatlngSuccess,
  addNewSearchHistory,
} from "../redux/mapSlice";
import httpRequest from "../utilities/httpRequest";

export function* getSuggestionsSaga(action) {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${action.payload}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;
  if (action.payload)
    try {
      const response = yield call(httpRequest, url);
      const { data } = response;
      yield put(getSuggestionsSuccess(data.predictions));
    } catch (error) {
      console.log(error);
    }
}

export function* getSelectedLatlngSaga(action, state) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${action.payload.address}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;
  if (action.payload.address)
    try {
      const response = yield call(httpRequest, url);
      const { data } = response;
      console.log(data.results[0]);
      const searchHistory = {
        address: action.payload.address,
        latlng: data.results[0].geometry.location,
      };
      yield put(getSelectedLatlngSuccess(data.results[0].geometry.location));
      if (action.payload.firstCall)
        yield put(addNewSearchHistory(searchHistory));
    } catch (error) {
      console.log(error);
    }
}
