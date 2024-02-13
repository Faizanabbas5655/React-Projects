import { configureStore, createSlice } from "@reduxjs/toolkit";

const postListSlice = createSlice({
  name: "postList",
  initialState: { postList: [] },
  reducers: {
    addPost: (state, action) => {
      state.postList = [action.payload, ...state.postList];
    },
    deletePost: (state, action) => {
      state.postList = state.postList.filter(
        (post) => action.payload !== post.id
      );
    },
    addInitialPosts: (state, action) => {
      state.postList = action.payload;
    },
  },
});

// const postReducer = (state = initialPost, action) => {
//   let newState = state;
//   if (action.type === "ADD_POST") {
//     newState = { ...state, postList: [action.payload, ...state.postList] };
//   } else if (action.type === "DELETE_POST") {
//     newState = {
//       ...state,
//       postList: state.postList.filter((post) => action.payload !== post.id),
//     };
//   } else if (action.type === "ADD_INITIAL_POSTS") {
//     newState = { ...state, postList: action.payload };
//   }
//   return newState;
// };

const postStore = configureStore({
  reducer: {
    postList: postListSlice.reducer,
  },
});

export const postListActions = postListSlice.actions;

export default postStore;
