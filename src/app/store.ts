import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from '../features/addToCart/addToCartSlice';

export const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
