import { configureStore } from "@reduxjs/toolkit";
import {cSlicer} from "./cSlicer";
export default configureStore({
  reducer: {
    child_store: cSlicer.reducer,
  },
});
