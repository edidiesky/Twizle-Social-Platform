import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GetAllUserProfile, GetUserProfile, UpdateProfile, loginUser, registerUser } from './authReducer'


const userData = JSON.parse(localStorage.getItem("User") || 'false');
const userToken = localStorage.getItem("Usertoken");
// Define a type for the slice state
interface authState {
  userInfo?: any,
  userDetails?: any,
  users?:any,
  token?: string,
  registerisLoading?: Boolean,
  registerisSuccess?: Boolean,
  registerisError?: Boolean,

  loginisLoading?: Boolean,
  loginisSuccess?: Boolean,
  loginisError?: Boolean,

  userprofileisLoading?: Boolean,
  userprofileisSuccess?: Boolean,
  userprofileisError?: Boolean,

  alertText?: any,
  showAlert?: Boolean,
  alertType?: string,


}

// Define the initial state using that type
const initialState: authState = {
  userInfo: userData ? userData : "",
  userDetails:  null,
  users: [],
  token: userToken ? userToken : "",

  registerisLoading: false,
  registerisSuccess: false,
  registerisError: false,

  loginisLoading: false,
  loginisSuccess: false,
  loginisError: false,


  userprofileisLoading: false,
  userprofileisSuccess: false,
  userprofileisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearUserProfile: (state, action) => {
      state = initialState
    },
  },
  extraReducers: (builder) => {
    // registration build case
    builder.addCase(registerUser.pending, (state, action) => {
      state.registerisLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registerisSuccess = true
      state.registerisLoading = false
      state.userInfo = action.payload
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerisSuccess = false
      state.registerisError = true
      state.registerisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // registration build case
    builder.addCase(loginUser.pending, (state, action) => {
      state.loginisLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginisSuccess = true
      state.loginisLoading = false
      state.userInfo = action.payload
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginisSuccess = false
      state.loginisError = true
      state.loginisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateProfile.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(UpdateProfile.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.userprofileisLoading = false
      state.userInfo = action.payload
      state.alertText = 'Profile Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(UpdateProfile.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(GetUserProfile.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(GetUserProfile.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.userprofileisLoading = false
      state.userDetails = action.payload
      
    })
    builder.addCase(GetUserProfile.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


    builder.addCase(GetAllUserProfile.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(GetAllUserProfile.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.userprofileisLoading = false
      state.users = action.payload

    })
    builder.addCase(GetAllUserProfile.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
  },
})

export const { clearUserProfile } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer