import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const Registerurl: string = "/api/v1/auth/register";
const Loginurl = "/api/v1/auth/login";

type RegisterData = {
  name?: string;
  email?: string;
  password?: string;
  display_name?: string,
  _id?:string
}

type KnownError = {
  errorMessage: string;
}

export const registerUser = createAsyncThunk<{
  rejectValue: KnownError,

}, RegisterData>(
  "registerUser",
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(Registerurl, registerData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return response.data.user;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

export const loginUser = createAsyncThunk<{
  rejectValue: KnownError,
}, RegisterData>(
  "loginUser",
  async (loginData, { rejectWithValue }) => {
    try {

      const response = await axios.post(Loginurl, loginData);
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("Usertoken", response.data.token);
      return response.data.user;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



export const UpdateProfile = createAsyncThunk<{
  rejectValue: KnownError,
}, RegisterData>(
  "UpdateProfile",
  async (profiledata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { userInfo: Object, token: string } };
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
      return response.data;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


