import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FollowAndUnFollowAUser, GetAllUserFollowers, GetAllUserFollowings, GetAllUserNotFollowed, GetAllUserProfile, GetUserProfile, GetUserSearch, GoogleOauth, UpdateProfile, loginUser, registerUser } from './authReducer'


const userData = JSON.parse(localStorage.getItem("User") || 'false');
const userToken = localStorage.getItem("Usertoken");
// Define a type for the slice state
interface authState {
  userInfo?: any,
  userDetails?: any,
  users?: any,
  token?: string,
  registerisLoading?: boolean,
  registerisSuccess?: boolean,
  registerisError?: boolean,

  googleOauthisLoading?: boolean,
  googleOauthisSuccess?: boolean,
  googleOauthisError?: boolean,

  profilepictureisLoading?: boolean,
  profilepictureisSuccess?: boolean,
  usernameisLoading?: boolean,
  usernameisSuccess?: boolean,
  usertoBefollowedInFllowingsArray?: boolean,

  loginisLoading?: boolean,
  loginisSuccess?: boolean,
  loginisError?: boolean,

  userprofileisLoading?: boolean,
  userprofileisSuccess?: boolean,
  userprofileisError?: boolean,

  alertText?: any,
  showAlert?: boolean,
  alertType?: string,

  isLoading?: boolean,
  isSuccess?: boolean,
  followers?: any,
  followings?: any,
  userSearchResult?: any,
  tweetSearchResult?: any,
  notfollowedUsers?: any,
  modaltab:number,


}

// Define the initial state using that type
const initialState: authState = {
  userInfo: userData ? userData : null,
  userDetails: null,
  users: [],
  usertoBefollowedInFllowingsArray: false,

  token: userToken ? userToken : "",

  registerisLoading: false,
  registerisSuccess: false,
  registerisError: false,
  modaltab:0,

  loginisLoading: false,
  loginisSuccess: false,
  loginisError: false,

  profilepictureisLoading: false,
  profilepictureisSuccess: false,
  usernameisLoading: false,
  usernameisSuccess: false,


  userprofileisLoading: false,
  userprofileisSuccess: false,
  userprofileisError: false,

  alertText: '',
  showAlert: false,
  alertType: '',

  isLoading: false,
  isSuccess: false,
  followers: [],
  followings: [],
  notfollowedUsers:[],
  userSearchResult: [],
  tweetSearchResult: [],
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearUserProfile: (state, action) => {
      state.registerisLoading = false
      state.registerisSuccess = false
      state.registerisError = false
      state.users = []
      state.userDetails = []

      state.loginisLoading = false
      state.loginisSuccess = false
      state.loginisError = false


      state.userprofileisLoading = false
      state.userprofileisSuccess = false
      state.userprofileisError = false

      state.alertText = ''
      state.showAlert = false
      state.alertType = ''
    },
    ClearUserInfo: (state, action) => {
      localStorage.removeItem("Usertoken");
      localStorage.removeItem("User");
      state.isLoading = false;
      state.alertType = "";
      state.showAlert = false;
      state.alertText = "";
    },
    handlModalTab :(state,action) =>{
      state.modaltab = action.payload
    }
  },

  extraReducers: (builder) => {
    // registration build case
    builder.addCase(registerUser.pending, (state, action) => {
      state.registerisLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registerisSuccess = true
      state.registerisLoading = false
      state.userInfo = action.payload.user
      state.token = action.payload.token
      state.showAlert = true
      state.token = action.payload.token
      state.alertText = 'Registration successfull... Redirecting Soon'
      localStorage.setItem("User", JSON.stringify(action.payload.user));
      localStorage.setItem("Usertoken", action.payload.token);
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
      state.userInfo = action.payload.user
      state.showAlert = true
      state.token = action.payload.token
      state.alertText = 'Login Success... Redirecting Soon'
      localStorage.setItem("User", JSON.stringify(action.payload.user))
      localStorage.setItem("Usertoken", action.payload.token)
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginisSuccess = false
      state.loginisError = true
      state.loginisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


    // registration build case
    builder.addCase(GoogleOauth.pending, (state, action) => {
      state.googleOauthisLoading = true
    })
    builder.addCase(GoogleOauth.fulfilled, (state, action) => {
      state.googleOauthisSuccess = true
      state.googleOauthisLoading = false
      state.userInfo = action.payload.user
      state.showAlert = true
      state.token = action.payload.token
      state.alertText = 'Google Auth Success... Redirecting Soon'
      localStorage.setItem("User", JSON.stringify(action.payload.user))
      localStorage.setItem("Usertoken", action.payload.token)
    })
    builder.addCase(GoogleOauth.rejected, (state, action) => {
      state.googleOauthisSuccess = false
      state.googleOauthisError = true
      state.googleOauthisLoading = false
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
      state.userDetails = action.payload
      state.alertText = 'Profile Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
      localStorage.setItem("User", JSON.stringify(action.payload));
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

    // case for user followings

    builder.addCase(GetAllUserFollowings.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(GetAllUserFollowings.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.userprofileisLoading = false
      state.followings = action.payload

    })
    builder.addCase(GetAllUserFollowings.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


    builder.addCase(GetAllUserFollowers.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(GetAllUserFollowers.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.userprofileisLoading = false
      state.followers = action.payload

    })
    builder.addCase(GetAllUserFollowers.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // get all user not followed

    builder.addCase(GetAllUserNotFollowed.pending, (state, action) => {
      state.userprofileisLoading = true
    })
    builder.addCase(GetAllUserNotFollowed.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.userprofileisLoading = false
      state.notfollowedUsers = action.payload

    })
    builder.addCase(GetAllUserNotFollowed.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // get all user not followed

    builder.addCase(GetUserSearch.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(GetUserSearch.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      state.isLoading = false
      state.userSearchResult = action.payload.user
      state.tweetSearchResult = action.payload.tweet

    })
    builder.addCase(GetUserSearch.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.isLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })


    builder.addCase(FollowAndUnFollowAUser.pending, (state, action) => {
      // state.userprofileisLoading = true
    })
    builder.addCase(FollowAndUnFollowAUser.fulfilled, (state, action) => {
      state.userprofileisSuccess = true
      // state.userprofileisLoading = false
      localStorage.setItem("User", JSON.stringify(action.payload.userInfo));

      state.users = action.payload.user
      state.userInfo = action.payload.userInfo
      state.usertoBefollowedInFllowingsArray = action.payload.usertoBefollowedInFllowingsArray

      state.alertText = 'Profile Update succesfully'
      state.showAlert = true
      state.alertType = 'success'

    })
    builder.addCase(FollowAndUnFollowAUser.rejected, (state, action) => {
      state.userprofileisSuccess = false
      state.userprofileisError = true
      state.userprofileisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
  },
})

export const { clearUserProfile, ClearUserInfo, handlModalTab } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer