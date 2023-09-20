import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const Registerurl: string = "/api/v1/auth/register";
const Loginurl = "/api/v1/auth/login";

type authtype = {
  name?: string;
  email?: string;
  password?: string;
  display_name?: string;
  usertoBefollowedInFllowingsArray?:boolean;
  user?: any;
  tweet?: any;
  userInfo?: { _id: string };
  token?: any;
  _id?: string;
  image?: string;
  location?: string;
  profile_image_url?: string;
  website?: string;
  profession?: string;  
  followings?: string[];
  followers?: string[];
  profile_banners?: string;
  bio?: string;
}

type KnownError = {
  errorMessage: string;
}

export const registerUser = createAsyncThunk<authtype, {
  rejectValue: KnownError,

}>(
  "registerUser",
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(Registerurl, registerData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return {
        token: response.data.token,
        user: response.data.user
      }
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const loginUser = createAsyncThunk<authtype, {
  rejectValue: KnownError,
}>(
  "loginUser",
  async (loginData, { rejectWithValue }) => {
    try {

      const response = await axios.post(Loginurl, loginData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return {
        token: response.data.token,
        user: response.data.user
      }
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



// update user profile
export const UpdateProfile = createAsyncThunk<{
  rejectValue: KnownError,
}, authtype>(
  "UpdateProfile",
  async (profiledata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: string }, token: string } };
      // console.log(auth.token)
      // console.log(profiledata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.put(
        `/api/v1/user/profile/${profiledata?._id}`,
        profiledata,
        config
      );
      return response.data.updatedUser;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Getuser profile
export const GetUserProfile = createAsyncThunk<{
  rejectValue: KnownError,
}>(
  "GetProfile",
  async (profiledata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/user/profile/${profiledata}`,
        config
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const FollowAndUnFollowAUser = createAsyncThunk < authtype,{
  rejectValue: KnownError,
}>(
  "FollowAndUnFollowAUser",
  async (profiledata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.put(
        `/api/v1/user/follow/${profiledata}`,
        null,
        config
      );
      const response2 = await axios.get(
        `/api/v1/user`,
        config
      )
      localStorage.setItem("User", JSON.stringify(response.data.updateUsers));

      return {
        user: response2.data.user,
        usertoBefollowedInFllowingsArray: response.data.usertoBefollowedInFllowingsArray,
        userInfo: response.data.updateUsers
      };

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



// Getuser profile
export const GetAllUserProfile = createAsyncThunk<{
  rejectValue: KnownError,
}>(
  "getalluserprofile",
  async (_, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/user`,
        config
      );
      return response.data.user;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Getuser profile
export const GetAllUserFollowings = createAsyncThunk<{
  rejectValue: KnownError,
}, string>(
  "GetAllUserFollowings",
  async (authdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: string }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/user/followings/${authdata}`,
        config
      );
      return response.data.followings;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


export const GetAllUserFollowers = createAsyncThunk<{
  rejectValue: KnownError,
}, string>(
  "GetAllUserFollowers",
  async (authdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: string }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/user/followers/${authdata}`,
        config
      );
      return response.data.followers;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// get all user not followed by the user
export const GetAllUserNotFollowed = createAsyncThunk<{
  rejectValue: KnownError,
}, string>(
  "GetAllUserNotFollowed",
  async (authdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: string }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/user/notfollowed/${authdata}`,
        config
      );
      return response.data.notfollowedUsers;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



// get all user not followed by the user
export const GetUserSearch = createAsyncThunk < authtype,{
  rejectValue: KnownError,
}>(
  "GetUserSearch",
  async (authdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: string }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/user/search?query=${authdata}`,
        config
      );
      return {
        user: response.data.user,
        tweet: response.data.tweet
      };

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);
