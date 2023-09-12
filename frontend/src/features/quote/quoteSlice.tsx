import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  // UpdateTweet,
  // getAllTweet,
  // GetSingleTweetDetails,
  CreateQuote,
  // DeleteTweet,
  // LikeAndUnlikeATweet,
  // GetUserTweet,
  // RePostATweet,
  // getAllBookmarkedTweet,
  // BookMarkATweet
} from './quoteReducer'
const BookMarked = localStorage.getItem("isBookMarked");


// Define a type for the tweet state
interface QuoteState {
  tweetDetails?: any,
  quotes?: any,
  bookmarks?: any,
  isLiked?: Boolean,
  tweetisLoading?: Boolean,
  isBookMarked?: Boolean,
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
const initialState: QuoteState = {
  tweetDetails: null,

  quotes: [],
  bookmarks: [],


  tweetisLoading: false,
  tweetisSuccess: false,
  tweetisError: false,
  isBookMarked: false,
  isLiked: false,

  // tweetisLoading: false,
  // tweetisSuccess: false,
  // tweetisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

}

export const quoteSlice = createSlice({
  name: 'quotes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cleartweet: (state, action) => {
      state.tweetDetails = null
      state.quotes = []
      state.tweetisLoading = false
      state.isBookMarked = false
      state.tweetisSuccess = false
      state.tweetisError = false
      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
  },
  extraReducers: (builder) => {
    // // registration build case
    // builder.addCase(getAllTweet.pending, (state, action) => {
    //   state.tweetisLoading = true
    // })
    // builder.addCase(getAllTweet.fulfilled, (state, action) => {
    //   state.tweetisSuccess = true
    //   state.tweetisLoading = false
    //   state.quotes = action.payload
    // })
    // builder.addCase(getAllTweet.rejected, (state, action) => {
    //   state.tweetisSuccess = false
    //   state.tweetisError = true
    //   state.tweetisLoading = false
    //   state.showAlert = true
    //   state.alertType = 'danger'
    //   state.alertText = action.payload

    // })

 

    // create user tweet
    builder.addCase(CreateQuote.pending, (state, action) => {
      state.tweetisLoading = true

    })
    builder.addCase(CreateQuote.fulfilled, (state, action) => {
      state.quotes = [action.payload, ...state.quotes]
      state.alertText = 'Tweet created succesfully'
      state.showAlert = true
      state.tweetisLoading = false

      state.alertType = 'success'
    })
    builder.addCase(CreateQuote.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // get single tweet slice

    // builder.addCase(GetSingleTweetDetails.pending, (state, action) => {
    //   // state.tweetisLoading = true
    // })
    // builder.addCase(GetSingleTweetDetails.fulfilled, (state, action) => {
    //   state.tweetisSuccess = true
    //   state.tweetisLoading = false
    //   state.isBookMarked = action.payload.userIdIncludedInBookmarksArray
    //   state.tweetDetails = action.payload.tweetdetails
    // })
    // builder.addCase(GetSingleTweetDetails.rejected, (state, action) => {
    //   state.tweetisSuccess = false
    //   state.tweetisError = true
    //   state.tweetisLoading = false
    //   state.showAlert = true
    //   state.alertType = 'danger'
    //   state.alertText = action.payload

    // })

    // DeleteTweet slice

    // builder.addCase(DeleteTweet.pending, (state, action) => {

    // })
    // builder.addCase(DeleteTweet.fulfilled, (state, action) => {

    //   state.quotes = state.quotes.filter((x) => x._id !== action.payload);
    // })
    // builder.addCase(DeleteTweet.rejected, (state, action) => {
    //   state.tweetisSuccess = false
    //   state.tweetisError = true
    //   state.tweetisLoading = false
    //   state.showAlert = true
    //   state.alertType = 'danger'
    //   state.alertText = action.payload

    // })

    // builder.addCase(UpdateTweet.pending, (state, action) => {
    //   state.tweetisLoading = true
    // })
    // builder.addCase(UpdateTweet.fulfilled, (state, action) => {
    //   state.tweetisSuccess = true
    //   state.tweetisLoading = false
    //   state.tweetDetails = action.payload
    //   state.alertText = 'Tweet Update succesfully'
    //   state.showAlert = true
    //   state.alertType = 'success'
    // })
    // builder.addCase(UpdateTweet.rejected, (state, action) => {
    //   state.tweetisSuccess = false
    //   state.tweetisError = true
    //   state.tweetisLoading = false
    //   state.showAlert = true
    //   state.alertType = 'danger'
    //   state.alertText = action.payload

    // })
    // builder.addCase(BookMarkATweet.pending, (state, action) => {
    //   state.tweetisLoading = true
    // })
    // builder.addCase(BookMarkATweet.fulfilled, (state, action) => {
    //   // handling bookmarks
    //   // find the tweet
    //   state.tweetisSuccess = true
    //   state.tweetisLoading = false
    //   state.isBookMarked = action.payload.userIdIncludedInBookmarksArray
    //   state.tweetDetails = action.payload.tweetdetails

    //   localStorage.setItem("isBookMarked", JSON.stringify(action.payload.userIdIncludedInBookmarksArray));


    //   state.alertText = 'Tweet Update succesfully'
    //   state.showAlert = true
    //   state.alertType = 'success'
    // })
    // builder.addCase(BookMarkATweet.rejected, (state, action) => {
    //   state.tweetisSuccess = false
    //   state.tweetisError = true
    //   state.tweetisLoading = false
    //   state.showAlert = true
    //   state.alertType = 'danger'
    //   state.alertText = action.payload

    // })


    // // Get all tweet of user slices
    // builder.addCase(GetUserTweet.pending, (state, action) => {
    //   // state.tweetisLoading = true
    // })
    // builder.addCase(GetUserTweet.fulfilled, (state, action) => {
    //   state.tweetisSuccess = true
    //   state.tweetisLoading = false
    //   state.quotes = action.payload
    //   state.alertText = 'Tweet Update succesfully'
    //   state.showAlert = true
    //   state.alertType = 'success'
    // })
    // builder.addCase(GetUserTweet.rejected, (state, action) => {
    //   state.tweetisSuccess = false
    //   state.tweetisError = true
    //   state.tweetisLoading = false
    //   state.showAlert = true
    //   state.alertType = 'danger'
    //   state.alertText = action.payload

    // })

  },
})

export const { cleartweet } = quoteSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tweet.value

export default quoteSlice.reducer