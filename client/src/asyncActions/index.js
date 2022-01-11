import { io } from "socket.io-client";
import { put, takeEvery, call } from "redux-saga/effects";
import { addManyTickersAction, FETCH_TICKERS } from "../store/index";

const socket = io("http://localhost:4000/");

socket.emit("start", () => {});

socket.on("disconnect", () => {  socket.connect();  });

function* addManyTickersWorker() {

  socket.on("ticker", function(data) {
    yield call(data);
  }); // TODO find out how to socket this
  yield put(addManyTickersAction(data));
}

export function* addManyTickersWatcher() {
  yield takeEvery(FETCH_TICKERS, addManyTickersWorker);
}
