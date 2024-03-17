import { configureStore } from "@reduxjs/toolkit";
import { folderSlice } from "./components/Folders/FolderState.jsx";
export const store = configureStore({
  reducer: {
    folders: folderSlice.reducer,
  },
});
