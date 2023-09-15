import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const messageurl: string = "/api/v1/message";
type messagedatatype = {
  message_text?: string;
  message_image?: any;
  _id?: string;
  message_user_id?:string;
}

interface messagePayload {
  userIdIncludedInBookmarksArray: boolean;
  messagedetails: any;
}

type KnownError = {
  errorMessage: string;
}

export const getAllmessage = createAsyncThunk<{
  rejectValue: KnownError,

}>(
  "getAllmessage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(messageurl);
      localStorage.setItem("message", JSON.stringify(response.data.message));
      return response.data.message;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Create User message
export const Createmessage = createAsyncThunk<{
  rejectValue: KnownError,
}, messagedatatype>(
  "Createmessage",
  async (messageData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      
        const response2 = await axios.post(
          `/api/v1/message/${messageData?._id}`,
          messageData,
          config
        );
        return response2.data.message;
    
     
      // console.log(messageData)
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User message
export const Deletemessage = createAsyncThunk<{
  rejectValue: KnownError,
}, { _id?: string }>(
  "deletemessage",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { token: string } };
      // console.log(auth.token)
      // console.log(messagedata?._id)
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      await axios.delete(
        `/api/v1/message/${Detailsdata}`,
        config
      );
      return Detailsdata;

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);


// Getmessage Details
export const GetSinglemessageDetails = createAsyncThunk < messagePayload,{
  rejectValue: KnownError,
}>(
  "GetSinglemessageTweetDetails",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { messageInfo: { _id: String }, token: string } };
    
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/message/tweet/${Detailsdata}`,
        config
      );
      return response.data.message

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Get User message
export const GetUsermessage = createAsyncThunk<{
  rejectValue: KnownError,
}, {_id?:any}>(
  "GetUsermessage",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { messageInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/message/user/${Detailsdata}`,
        config
      );
      return response.data.message;
      // console.log(Detailsdata)

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);
