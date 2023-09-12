import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import tweetSlice  from './features/tweet/tweetSlice'
import quoteSlice from './features/quote/quoteSlice'
// ...

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tweet: tweetSlice,
    quotes:quoteSlice
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch