import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import tweetSlice  from './features/tweet/tweetSlice'
import quoteSlice from './features/quote/quoteSlice'
import messageSlice from './features/message/messageSlice'
import conversationSlice from './features/conversation/conversationSlice'
import commentSlice from './features/comment/commentSlice'
// ...

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tweet: tweetSlice,
    quotes:quoteSlice,
    conversation: conversationSlice,
    message: messageSlice,
    comment: commentSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch