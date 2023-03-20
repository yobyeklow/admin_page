import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getProduct, getProductSuccess } from "./productState";

function* workGetProduct(action) {
  const { payload } = action; // Du lieu tu input phan login
  const res = yield axios.get(`http://localhost:8080/api/products/${payload}`);

  if (res.status === 200) {
    yield put(getProductSuccess(res.data));
  }
}
function* productSaga() {
  yield takeLatest(getProduct.type, workGetProduct);
}

export default productSaga;
