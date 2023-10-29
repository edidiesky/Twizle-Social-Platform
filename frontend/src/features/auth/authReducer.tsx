import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const Registerurl: string = `${import.meta.env.VITE_API_BASE_URLS}/auth/register`;
const Loginurl = `${import.meta.env.VITE_API_BASE_URLS}/auth/login`;

type authtype = {
  name?: string;
  email?: string;
  password?: string;
  birthday?: string;
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

export const registerUser = createAsyncThunk<authtype, authtype, {
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

export const loginUser = createAsyncThunk<authtype, { email?: string, password?: string, name?: string }, {
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

export const GoogleOauth = createAsyncThunk < authtype, { given_name?:string,picture?:string, email?: string, family_name?: string, name?: string }, {
  rejectValue: KnownError,
}>(
  "GoogleOauth",
  async (loginData, { rejectWithValue }) => {
    try {

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URLS}/auth/google/oauth`, loginData);
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
        `${import.meta.env.VITE_API_BASE_URLS}/user/profile/${profiledata?._id}`,
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
}, string>(
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
        `${import.meta.env.VITE_API_BASE_URLS}/user/profile/${profiledata}`,
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

export const FollowAndUnFollowAUser = createAsyncThunk<{ user?: {}; usertoBefollowedInFllowingsArray: boolean; userInfo: {} },
{ profiledata?: string },
  {
    rejectValue: KnownError
  }>(
  "FollowAndUnFollowAUser",
  async ({profiledata}, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URLS}/user/follow/${profiledata}`,
        null,
        config
      );
      const response2 = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user`,
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
        `${import.meta.env.VITE_API_BASE_URLS}/user`,
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
        `${import.meta.env.VITE_API_BASE_URLS}/user/followings/${authdata}`,
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
        `${import.meta.env.VITE_API_BASE_URLS}/user/followers/${authdata}`,
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
export const GetAllUserNotFollowed = createAsyncThunk<string, {authdata:string},{
  rejectValue: KnownError,
}>(
  "GetAllUserNotFollowed",
  async ({authdata}, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: string }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user/notfollowed/${authdata}`,
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



// get all user and tweet search by the user
export const GetUserSearch = createAsyncThunk < authtype, { authdata:string},{
  rejectValue: KnownError,
}>(
  "GetUserSearch",
  async ({authdata}, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: { _id: string }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/user/search?query=${authdata}`,
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

// // get all user and tweet search by the user
// export const getLoginAuthDetails = createAsyncThunk<authtype, { authdata: string }, {
//   rejectValue: KnownError,
// }>(
//   "getLoginAuthDetails",
//   async ({ authdata }, { rejectWithValue, getState }) => {

//     try {
      
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_BASE_URLS}/google/login/success`
//       );
//      console.log(response.user)

//     } catch (err: any) {
//       const message = err.response && err.response.data.message
//         ? err.response.data.message
//         : err.message
//       return rejectWithValue(message);

//     }
//   }
// );

