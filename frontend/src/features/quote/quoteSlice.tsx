import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  // UpdateTweet,
  // getAllTweet,
  // GetSingleTweetDetails,
  CreateQuote, GetSingleQuoteTweetDetails,
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
  quoteDetails?: any,
  quotes?: any,
  quote?: any,
  bookmarks?: any,
  isLiked?: Boolean,
  quoteisLoading?: Boolean,
  isBookMarked?: Boolean,
  quoteisSuccess?: Boolean,
  quoteisError?: Boolean,

  alertText?: any,
  showAlert?: Boolean,
  alertType?: string,


}

// Define the initial state of the quote using that type
const initialState: QuoteState = {
  quoteDetails: null,

  quotes: [],
  quote: null,
  bookmarks: [],


  quoteisLoading: false,
  quoteisSuccess: false,
  quoteisError: false,
  isBookMarked: false,
  isLiked: false,

  alertText: '',
  showAlert: false,
  alertType: '',

}

export const quoteSlice = createSlice({
  name: 'quotes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearquote: (state, action) => {
      state.quoteDetails = null
      state.quotes = []
      state.quoteisLoading = false
      state.isBookMarked = false
      state.quoteisSuccess = false
      state.quoteisError = false
      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
  },
  extraReducers: (builder) => {
    // create user quote
    builder.addCase(CreateQuote.pending, (state, action) => {
      state.quoteisLoading = true

    })
    builder.addCase(CreateQuote.fulfilled, (state, action) => {
      state.quote = action.payload
      state.alertText = 'quote created succesfully'
      state.showAlert = true
      state.quoteisLoading = false

      state.alertType = 'success'
    })
    builder.addCase(CreateQuote.rejected, (state, action) => {
      state.quoteisSuccess = false
      state.quoteisError = true
      state.quoteisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // get single tweet slice

    builder.addCase(GetSingleQuoteTweetDetails.pending, (state, action) => {
      // state.tweetisLoading = true
    })
    builder.addCase(GetSingleQuoteTweetDetails.fulfilled, (state, action) => {
      state.quoteisSuccess = true
      state.quoteisLoading = false
      state.quotes = action.payload
    })
    builder.addCase(GetSingleQuoteTweetDetails.rejected, (state, action) => {
      state.quoteisSuccess = false
      state.quoteisError = true
      state.quoteisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

  },
})

export const { clearquote } = quoteSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tweet.value

export default quoteSlice.reducer