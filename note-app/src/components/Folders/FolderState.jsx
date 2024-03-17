import { createSlice } from "@reduxjs/toolkit";
const mockFolders = [
  {
    id: "folder-1",
    name: "Folder 1",
  },
  {
    id: "folder-2",
    name: "Folder 2",
  },
  {
    id: "folder-3",
    name: "Folder 3",
  },
  {
    id: "folder-4",
    name: "Folder 4",
  },
];

export const folderSlice = createSlice({
  name: "folders",
  initialState: {
    data: mockFolders,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    addFolder: (state, action) => {
      state.data.push(action.payload);
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    errorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
// solve action
export const { addFolder, isLoading, errorMessage } = folderSlice.actions;
//solve selector
export const selectFolders = (state) => state.folders;
