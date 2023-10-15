import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  CreateTweetcomment, 
  CreateTweetReplycomment,
  GetSingleReplyComment, 
  getAllComment
} from './commentReducer'
const BookMarked = localStorage.getItem("isBookMarked");


// Define a type for the comment state
interface commentState {
  commentDetails?: any,
  comment?: any,
  bookmarks?: any,
  isLiked?: Boolean,
  commentisLoading?: Boolean,
  isBookMarked?: Boolean,
  commentisSuccess?: Boolean,
  commentisError?: Boolean,
  alertText?: any,
  showAlert?: Boolean,
  alertType?: string,


}
// Define the initial state of the comment using that type
const initialState: commentState = {
  commentDetails: null,

  comment: [],
  bookmarks: [],


  commentisLoading: false,
  commentisSuccess: false,
  commentisError: false,
  isBookMarked: false,
  isLiked: false,

  // commentisLoading: false,
  // commentisSuccess: false,
  // commentisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

}
export const commentSlice = createSlice({
  name: 'comment',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearcomment: (state, action) => {
      state.commentDetails = null
      state.comment = []
      state.commentisLoading = false
      state.isBookMarked = false
      state.commentisSuccess = false
      state.commentisError = false
      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
  },
  extraReducers: (builder) => {
    // get single tweet comment
    builder.addCase(getAllComment.pending, (state, action) => {
      state.commentisLoading = true
    })
    builder.addCase(getAllComment.fulfilled, (state, action) => {
      state.commentisSuccess = true
      state.commentisLoading = false
      state.comment = action.payload
    })
    builder.addCase(getAllComment.rejected, (state, action) => {
      state.commentisSuccess = false
      state.commentisError = true
      state.commentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // // registration build case
    builder.addCase(CreateTweetReplycomment.pending, (state, action) => {
      state.commentisLoading = true
    })
    builder.addCase(CreateTweetReplycomment.fulfilled, (state, action) => {
      state.commentisSuccess = true
      state.commentisLoading = false
      state.commentDetails = action.payload
    })
    builder.addCase(CreateTweetReplycomment.rejected, (state, action) => {
      state.commentisSuccess = false
      state.commentisError = true
      state.commentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })



    // create user comment
    builder.addCase(CreateTweetcomment.pending, (state, action) => {
      state.commentisLoading = true

    })
    builder.addCase(CreateTweetcomment.fulfilled, (state, action) => {
      state.comment = action.payload
      state.alertText = 'comment created succesfully'
      state.showAlert = true
      state.commentisLoading = false

      state.alertType = 'success'
    })
    builder.addCase(CreateTweetcomment.rejected, (state, action) => {
      state.commentisSuccess = false
      state.commentisError = true
      state.commentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // get single comment slice

    builder.addCase(GetSingleReplyComment.pending, (state, action) => {
      // state.commentisLoading = true
    })
    builder.addCase(GetSingleReplyComment.fulfilled, (state, action) => {
      state.commentisSuccess = true
      state.commentisLoading = false
      state.comment = action.payload
    })
    builder.addCase(GetSingleReplyComment.rejected, (state, action) => {
      state.commentisSuccess = false
      state.commentisError = true
      state.commentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })



  },
})
export const { clearcomment } = commentSlice.actions

export default commentSlice.reducer