import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Registerurl: string = "/api/v1/auth/register";
const Loginurl = "/api/v1/auth/login";

interface RegisterData {
    username?: string;
    email?: string;
    password?: string;
  }
  

export const registerUser = createAsyncThunk(
  "registerUser",
  async (registerData:RegisterData, thunkAPI) => {
    try {
      const { data } = await axios.post(Registerurl, registerData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (loginData:RegisterData, thunkAPI) => {
    try {
      const { data } = await axios.post(Loginurl, loginData);
      localStorage.setItem("User", JSON.stringify(data.user));
      localStorage.setItem("Usertoken", data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
