import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  UpdateTweet,
  getAllTweet,
  GetSingleTweetDetails,
  CreateTweet,
  DeleteTweet,
  LikeAndUnlikeATweet,
  GetUserTweet,
  RePostATweet
} from './tweetReducer'

// Define a type for the tweet state
interface tweetState {
  tweetDetails?: any,
  tweets?: any,
  tweetisLoading?: Boolean,
  tweetisSuccess?: Boolean,
  tweetisError?: Boolean,

  // tweetisLoading?: Boolean,
  // tweetisSuccess?: Boolean,
  // tweetisError?: Boolean,

  alertText?: any,
  showAlert?: Boolean,
  alertType?: string,


}

// Define the initial state of the tweet using that type
const initialState: tweetState = {
  tweetDetails: null,
  tweets: [],

  tweetisLoading: false,
  tweetisSuccess: false,
  tweetisError: false,

  // tweetisLoading: false,
  // tweetisSuccess: false,
  // tweetisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

}

export const tweetSlice = createSlice({
  name: 'tweet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cleartweet: (state, action) => {
        state.tweetDetails = null
        state.tweets = []
        state.tweetisLoading = false
        state.tweetisSuccess = false
        state.tweetisError = false
        state.alertText = ''
        state.showAlert = false
        state.alertType = ''
    },
  },
  extraReducers: (builder) => {
    // registration build case
    builder.addCase(getAllTweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(getAllTweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweets = action.payload
    })
    builder.addCase(getAllTweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user tweet
    builder.addCase(CreateTweet.pending, (state, action) => {
    })
    builder.addCase(CreateTweet.fulfilled, (state, action) => {
      state.tweets = [action.payload,...state.tweets]
      state.alertText = 'Tweet created succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(CreateTweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // get single tweet slice

    builder.addCase(GetSingleTweetDetails.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(GetSingleTweetDetails.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweetDetails = action.payload
    })
    builder.addCase(GetSingleTweetDetails.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // DeleteTweet slice

    builder.addCase(DeleteTweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(DeleteTweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
    })
    builder.addCase(DeleteTweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateTweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(UpdateTweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweetDetails = action.payload
      state.alertText = 'Tweet Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(UpdateTweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // like and unlike slices
    builder.addCase(LikeAndUnlikeATweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(LikeAndUnlikeATweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweetDetails = action.payload
      state.alertText = 'Tweet Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(LikeAndUnlikeATweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


    // Get all tweet of user slices
    builder.addCase(GetUserTweet.pending, (state, action) => {
      // state.tweetisLoading = true
    })
    builder.addCase(GetUserTweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweets = action.payload
      state.alertText = 'Tweet Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(GetUserTweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


    // Get all tweet of user slices
    builder.addCase(RePostATweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(RePostATweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweetDetails = action.payload
      state.alertText = 'Tweet created succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(RePostATweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
  },
})

export const { cleartweet } = tweetSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tweet.value

export default tweetSlice.reducer