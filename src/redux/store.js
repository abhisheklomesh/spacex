import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./slice/historySlice";
import payloadReducer from "./slice/payloadSlice";

export default configureStore({
  reducer: {
    payload: payloadReducer,
    history: historySlice,
  },
});
