import { all, fork } from "redux-saga/effects";
import productSaga from "./products/productSaga";

import userSaga from "./user/userSaga";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  yield all([fork(productSaga)]);
}
