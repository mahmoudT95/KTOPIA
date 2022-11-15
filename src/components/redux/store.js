import { configureStore } from "@reduxjs/toolkit";
import subjects from "./subjectsSlice";
import videos from "./videosSlice";
export const store = configureStore({
  // reducers
  reducer: {
    subjects,
    videos
  },
});
