import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './posts.js';
import postReducer from './post.js';

export const store = configureStore({
  reducer: {
    posts: postsReducer.reducer,
    post: postReducer.reducer
  }
});

export default store;