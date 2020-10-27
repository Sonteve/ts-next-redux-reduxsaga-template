import { all } from "redux-saga/effects";
import userSaga from "./user";
/* import axios from "axios"; */

/* axios.defaults.baseURL = "http://localhost:3000"; */

export default function* rootSaga() {
  yield all([userSaga()]);
}
