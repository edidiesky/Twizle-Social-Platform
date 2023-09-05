import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GetTimeLinetweet, UpdateTweet, getAllTweet, GetSingleTweetDetails, CreateTweet, DeleteTweet } from './tweetReducer'

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
  tweetDetails:  null,
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
      state = initialState
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
      state.tweetisLoading = true
    })
    builder.addCase(CreateTweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweetDetails = action.payload
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

    builder.addCase(GetTimeLinetweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(GetTimeLinetweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.tweetDetails = action.payload
      
    })
    builder.addCase(GetTimeLinetweet.rejected, (state, action) => {
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