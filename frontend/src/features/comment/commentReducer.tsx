import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
type messagedatatype = {
  text?: string;
  reply_image?: any;
  _id?: string;
  userId?: string;
  conversationId?: string;
  tweetid?: string;
  replyid?: string;
}

interface messagePayload {
  userIdIncludedInBookmarksArray: boolean;
  messagedetails: any;
}

type KnownError = {
  errorMessage: string;
}

export const getAllComment = createAsyncThunk<{
  rejectValue: KnownError,

}, string>(
  "getAllComment",
  async (tweetId, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { messageInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URLS}/comment/${tweetId}`, config);
      return response.data.reply;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Create a single Tweet Comment
export const CreateTweetcomment = createAsyncThunk<{
  rejectValue: KnownError,
}, messagedatatype>(
  "CreateTweetcomment",
  async (messageData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URLS}/message/${messageData?.tweetid}`,
          messageData,
          config
        );
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${messageData?.tweetid}`,
        config
      )
      return response.data.reply;
    
     
      // console.log(messageData)
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// create a reply to a single comment associated with a tweet
export const CreateTweetReplycomment = createAsyncThunk<{
  rejectValue: KnownError,
}, messagedatatype>(
  "CreateTweetReplycomment",
  async (messageData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };

      await axios.post(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${messageData?.tweetid}/reply/${messageData?.replyid}`,
        messageData,
        config
      );
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${messageData?.tweetid}/reply/${messageData?.replyid}`,
        config
      )
      return response.data.reply;


      // console.log(messageData)
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Getmessage Details
export const GetSingleReplyComment = createAsyncThunk<{
  rejectValue: KnownError,
}, messagedatatype>(
  "GetSinglemessageTweetDetails",
  async (messageData, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { messageInfo: { _id: String }, token: string } };
    
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URLS}/message/${messageData?.tweetid}/reply/${messageData?.replyid}`,
        config
      )
      return response.data.reply;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


