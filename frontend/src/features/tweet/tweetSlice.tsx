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
  RePostATweet,
  getAllBookmarkedTweet,
  BookMarkATweet
} from './tweetReducer'
const BookMarked = localStorage.getItem("isBookMarked");

const tweetdata = JSON.parse(localStorage.getItem("tweet") || 'false');

// Define a type for the tweet state
interface tweetState {
  tweetDetails?: any,
  tweets?: any,
  bookmarks?: any,
  isLiked?: boolean,
  tweetisLoading?: boolean,
  isBookMarked?: boolean,
  tweetisSuccess?: boolean,
  tweetisError?: boolean,

  createtweetisLoading?: boolean,
  createtweetisSuccess?: boolean,
  createtweetisError?: boolean,

  alertText?: any,
  showAlert?: boolean,
  alertType?: string,

  modal?:boolean,
  sidebar?:boolean,
  userIdIncludedInTweetLikesArray?:boolean




}

// Define the initial state of the tweet using that type
const initialState: tweetState = {
  tweetDetails: null,

  tweets: tweetdata ? tweetdata: [],
  bookmarks: [],


  tweetisLoading: false,
  tweetisSuccess: false,
  tweetisError: false,
  isBookMarked: false,
  isLiked: false,
  modal: false,
  sidebar: false,


  // tweetisLoading: false,
  // tweetisSuccess: false,
  // tweetisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

  createtweetisLoading: false,
  createtweetisSuccess: false,
  createtweetisError: false,
  userIdIncludedInTweetLikesArray:false

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
      state.isBookMarked = false
      state.tweetisSuccess = false
      state.tweetisError = false
      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
    ToggelDisplayModal: (state, action) => {
      state.modal = !state.modal
    }, 
    offDisplayModal: (state, action) => {
      state.modal = false
    },

    // toggle sidebar
    ToggleSidebar: (state, action) => {
      state.sidebar = !state.sidebar
    },
    offSidebar: (state, action) => {
      state.sidebar = false
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

    // bookmarks
    builder.addCase(getAllBookmarkedTweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(getAllBookmarkedTweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.bookmarks = action.payload
    })
    builder.addCase(getAllBookmarkedTweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user tweet
    builder.addCase(CreateTweet.pending, (state, action) => {
      state.createtweetisLoading = true

    })
    builder.addCase(CreateTweet.fulfilled, (state, action) => {
      state.tweets = [action.payload, ...state.tweets]
      state.alertText = 'Tweet created succesfully'
      state.showAlert = true
      state.tweetisLoading = false
      state.createtweetisSuccess = true
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
      // state.tweetisLoading = true
    })
    builder.addCase(GetSingleTweetDetails.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.isBookMarked = action.payload.userIdIncludedInBookmarksArray
      state.tweetDetails = action.payload.tweetdetails
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

    })
    builder.addCase(DeleteTweet.fulfilled, (state, action) => {

      state.tweets = state.tweets.filter((x) => x._id !== action.payload);
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
    builder.addCase(BookMarkATweet.pending, (state, action) => {
      state.tweetisLoading = true
    })
    builder.addCase(BookMarkATweet.fulfilled, (state, action) => {
      // handling bookmarks
      // find the tweet
      state.tweetisSuccess = true
      state.tweetisLoading = false
      state.isBookMarked = action.payload.userIdIncludedInBookmarksArray
      state.tweetDetails = action.payload.tweetdetails

      localStorage.setItem("isBookMarked", JSON.stringify(action.payload.userIdIncludedInBookmarksArray));


      state.alertText = 'Tweet Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(BookMarkATweet.rejected, (state, action) => {
      state.tweetisSuccess = false
      state.tweetisError = true
      state.tweetisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // like and unlike slices
    builder.addCase(LikeAndUnlikeATweet.pending, (state, action) => {
      // state.tweetisLoading = true
    })
    builder.addCase(LikeAndUnlikeATweet.fulfilled, (state, action) => {
      state.tweetisSuccess = true
      state.tweetDetails = action.payload.tweetDetails
      state.tweets = action.payload.tweet
      localStorage.setItem("tweet", JSON.stringify(action.payload.tweet));

      state.userIdIncludedInTweetLikesArray = action.payload.userIdIncludedInTweetLikesArray
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

export const { cleartweet, ToggelDisplayModal, offDisplayModal, ToggleSidebar, offSidebar } = tweetSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tweet.value

export default tweetSlice.reducer