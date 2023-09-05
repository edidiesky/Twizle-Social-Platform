import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const tweeturl: string = "/api/v1/tweet";
type tweetdatatype = {
  tweet_text?: string;
  tweet_image?: any;
  _id?: string;
}

type KnownError = {
  errorMessage: string;
}

export const getAllTweet = createAsyncThunk<{
  rejectValue: KnownError,

}, tweetdatatype>(
  "getAllTweet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(tweeturl);
      localStorage.setItem("tweet", JSON.stringify(response.data.tweet));
      return response.data.tweet;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Create User tweet
export const CreateTweet = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "CreateTweet",
  async (tweetData, { rejectWithValue }) => {
    try {

      const response = await axios.post(tweeturl, tweetData);
      localStorage.setItem("tweet", JSON.stringify(response.data.tweet));
      return response.data.tweet;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// update User tweet
export const UpdateTweet = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "UpdateDetails",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { token: string } };
      // console.log(auth.token)
      // console.log(Detailsdata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.put(
        `/api/v1/tweet/Details/${Detailsdata?._id}`,
        Detailsdata,
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

// Deelete User tweet
export const DeleteTweet = createAsyncThunk<{
  rejectValue: KnownError,
}, tweetdatatype>(
  "delete tweet",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { token: string } };
      // console.log(auth.token)
      // console.log(tweetdata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      await axios.delete(
        `/api/v1/tweet/${Detailsdata?._id}`,
        config
      );
      // return Detailsdata?._id;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// GetTweet Details
export const GetSingleTweetDetails = createAsyncThunk<{
  rejectValue: KnownError,
}, {name?:any}>(
  "GetDetails",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { TweetInfo: { _id: String }, token: string } };
    
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/tweet/Details/${Detailsdata}`,
        config
      );
      return response.data.tweet;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);



