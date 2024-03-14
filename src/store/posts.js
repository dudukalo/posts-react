import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
)

const initialState = {
  isLoading: "idle",
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = 'loading';
    })
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isLoading = 'loaded';
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = 'error';
    })
  },
  selectors: {
    selectPosts: (state) => state.posts,
    selectPostsFragment: (state, start, finish) =>  start < finish ? state.posts.slice(start, finish) : state.posts,
    selectPostsCount: (state) => state.posts.length,
    selectIsLoading: (state) => state.isLoading,
  },
});

export const {
  selectPosts,
  selectPostsFragment,
  selectIsLoading,
  selectPostsCount
} = postsSlice.selectors;

export default postsSlice;