import { io } from "socket.io-client";
import { put, take, takeLatest, all, call } from "redux-saga/effects";
import { eventChannel, END } from 'redux-saga';
import { addManyTickersAction, FETCH_TICKERS } from "../store/index";

const receiveMessage = (socket) => {

  socket.on("disconnect", () => {
    socket.connect();
    console.log("socket disconnected");
  });

  return eventChannel((emitter) => {
    socket.on("ticker", function(data) {
      emitter(data);
      console.log("DATA:", data);
    });

    return () => { emitter(END); }
  });
}

function* addManyTickersWorker() {
  const socket = io("http://localhost:4000/");
  socket.emit("start", () => {});
  const channel = yield call(receiveMessage, socket);
  while(true) {
    try {
      const value = yield take(channel);
      yield put(addManyTickersAction(value));
    }
    catch(error) {
      console.error("socket error:", error);
    }
  }
}

function* addManyTickersWatcher() {
  yield takeLatest(FETCH_TICKERS, addManyTickersWorker);
}

export function* rootSaga() {
  yield all([
    addManyTickersWatcher(),
  ]);
}
