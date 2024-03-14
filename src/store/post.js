import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPost = createAsyncThunk(
  'post/fetchPost',
  async (postId) => {
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);

    return {
      post: postResponse.data,
      user: userResponse.data,
    }
  }
)

const initialState = {
  isLoading: "idle",
  post: {
    post: {},
    user: {}
  },
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = 'loading';
    })
    builder.addCase(fetchPost.fulfilled, (state, { payload }) => {
      state.post = {
        post: payload.post,
        user: payload.user
      }
      state.isLoading = 'loaded';
    })
    builder.addCase(fetchPost.rejected, (state) => {
      state.isLoading = 'error';
    })
  },
  selectors: {
    selectPost: (state) => state.post,
    selectIsLoading: (state) => state.isLoading,
  },
})

export const { selectPost, selectIsLoading } = postSlice.selectors;

export default postSlice;