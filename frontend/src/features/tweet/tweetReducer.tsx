import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const tweeturl: string = "/api/v1/tweet";
type tweetdatatype = {
  tweet_text?: string;
  tweet_image?: any;
  userIdIncludedInTweetLikesArray?: any;
  tweetDetails?: any;
  tweet?: any;
  _id?: string;
  tweet_user_id?: {
    _id?: string;
    display_name?: string;
    name?: string;
    bio?: string;
    profile_image_url?: string;

  }
}

interface BookMarkATweetPayload {
  userIdIncludedInBookmarksArray: boolean;
  tweetDetails: any;
}

type KnownError = {
  errorMessage: string;
}

export const getAllTweet = createAsyncThunk<{
  rejectValue: KnownError,

}>(
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

export const getAllBookmarkedTweet = createAsyncThunk<{
  rejectValue: KnownError,

}>(
  "getAllBookmarkedTweet",
  async (tweetData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get('/api/v1/tweet/bookmark', config);
      return response.data.bookmarkTweets;
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
  async (tweetData, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.post(tweeturl, tweetData, config);
      if (response?.data?.tweet) {
        const response2 = await axios.get(
          `/api/v1/tweet/${response?.data?.tweet?._id}`,
          config
        );
        localStorage.setItem("tweet", JSON.stringify(response2.data.tweet));
        return response2.data.tweet;
      }

      // console.log(tweetData)
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

// update User tweet
export const BookMarkATweet = createAsyncThunk<BookMarkATweetPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
  "BookMarkATweet",
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
      const response1 = await axios.put(
        `/api/v1/tweet/bookmark/${Detailsdata}`,
        Detailsdata,
        config
      );
      const response2 = await axios.get(
        `/api/v1/tweet/${Detailsdata}`,
        config
      );
      return {
        tweetDetails: response2.data.tweet,
        userIdIncludedInBookmarksArray: response2.data.userIdIncludedInBookmarksArray
      };

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Deelete User tweet
export const DeleteTweet = createAsyncThunk<
  string, // Return type (Detailsdata)
  { Detailsdata: string },
  {
    rejectValue: KnownError;
  }
>(
  "deletetweet",
  async ({ Detailsdata }, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { token: string } };
      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      await axios.delete(`/api/v1/tweet/${Detailsdata}`, config);
      return Detailsdata; // Return the data
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
      return rejectWithValue(message);
    }
  }
);



// GetTweet Details
export const GetSingleTweetDetails = createAsyncThunk<BookMarkATweetPayload, { Detailsdata?: string }, {
  rejectValue: KnownError,
}>(
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
        `/api/v1/tweet/${Detailsdata}`,
        config
      );
      return {
        tweetDetails: response.data.tweet,
        userIdIncludedInBookmarksArray: response.data.userIdIncludedInBookmarksArray
      };

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Like and unlike a tweet
export const LikeAndUnlikeATweet = createAsyncThunk<
  tweetdatatype, // Adjust the return type
  { Detailsdata?: string },
  {
    rejectValue: KnownError,
  }
>(
  "LikeAndUnlikeATweet",
  async (Detailsdata, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: { TweetInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.put(
        `/api/v1/tweet/like/${Detailsdata}`,
        null,
        config
      );
      const response1 = await axios.get(`/api/v1/tweet/${Detailsdata}`, config);
      const response2 = await axios.get(`/api/v1/tweet/`, config);

      const tweetData: tweetdatatype = {
        tweetDetails: response.data.updateTweet,
        tweet: response2.data.tweet,
        userIdIncludedInTweetLikesArray: response1.data.userIdIncludedInTweetLikesArray,
      };

      return tweetData;
    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
      return rejectWithValue(message);
    }
  }
);


// Get User Tweet
export const GetUserTweet = createAsyncThunk<{
  rejectValue: KnownError,
}, { _id?: any }>(
  "GetUserTweet",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { TweetInfo: { _id: String }, token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.get(
        `/api/v1/tweet/user/${Detailsdata}`,
        config
      );
      return response.data.tweet;
      // console.log(Detailsdata)

    } catch (err: any) {
      const message = err.response && err.response.data.message
        ? err.response.data.message
        : err.message
      return rejectWithValue(message);

    }
  }
);

// Like and unlike a tweet
export const RePostATweet = createAsyncThunk<{
  rejectValue: KnownError,
}, { Detailsdata: string }>(
  "RePostATweet",
  async (Detailsdata, { rejectWithValue, getState }) => {

    try {
      const { auth } = getState() as { auth: { token: string } };

      const config = {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      };
      const response = await axios.post(
        `/api/v1/tweet/repost/${Detailsdata}`,
        null,
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

