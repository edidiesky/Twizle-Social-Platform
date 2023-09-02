import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const Registerurl: string = "/api/v1/auth/register";
const Loginurl = "/api/v1/auth/login";

type RegisterData =  {
  name?: string;
  email?: string;
  password?: string;
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
      if (response.status === 200) {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem("Usertoken", response.data.token);
        return response.data;
      } else {
        return rejectWithValue(response.data.error);
      }
      // console.log(registerData)
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }

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
      if (response.status === 200) {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem("Usertoken", response.data.token);
        return response.data;
      } else {
        return rejectWithValue(response.data.error);
      }
    } catch (err) {
      const error: AxiosError<KnownError> = err as any;
      if (!error.response) {
        throw err;
      }

    }
  }
);
