import { configureStore } from "@reduxjs/toolkit";
import appState from "./reducers/appState";

export default configureStore({
  reducer: {
    appState: appState,
  },
});
