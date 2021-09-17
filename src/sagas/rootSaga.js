import { takeLatest } from "redux-saga/effects";
import { getSuggestions, getSelectedLatlng } from "../redux/mapSlice";
import { getSuggestionsSaga, getSelectedLatlngSaga } from "./mapSaga";

export function* rootSaga() {
  yield takeLatest(getSuggestions.type, getSuggestionsSaga);
  yield takeLatest(getSelectedLatlng.type, getSelectedLatlngSaga);
}
