import axios from "axios";
import { call, takeLatest } from "redux-saga/effects";
import { userLogin } from "./userState";

function* workLogging(action) {
  const { payload } = action; // Du lieu tu input phan login
  const res = axios
    .post("http://localhost:8080/api/auth/signin", payload)
    .then((res) => res.data); // Call API login
  console.log(res);
  if (res.status === 200) {
    yield userLogin(res.data);
  }
}
function* userSaga() {
  yield takeLatest(userLogin.type, workLogging);
}

export default userSaga;
