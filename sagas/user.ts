import { /* call, */ delay, put, takeLatest } from "redux-saga/effects";
import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  getUserDataAsync,
} from "../reducers/user";
/* import axios from "axios"; */

/* function getUserAPI(user:string){
    return axios.get(`https://api.test.com${user}`);
} */

function* getUserDataSaga(action: ReturnType<typeof getUserDataAsync.request>) {
  console.log(action.payload);
  try {
    /* const result = yield call(getUserAPI, action.payload); */

    //test
    yield delay(1000);

    const result = {
      data: {
        name: `손티브${Math.random() * 9}`,
        age: `${Math.floor(Math.random() * (100 - 1 + 1) + 1)}`,
        email: `sds11609@gmail.com`,
        from: "korea",
        message: action.payload,
      },
    };
    //test

    yield put({
      type: GET_USER_DATA_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_DATA_FAILURE,
      payload: error.response.data,
    });
  }
}

export default function* userSaga() {
  yield takeLatest(GET_USER_DATA_REQUEST, getUserDataSaga);
}
