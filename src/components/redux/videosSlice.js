import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseURL = `https://youtube-v3-alternative.p.rapidapi.com/search`;
const options = {
  url: baseURL,
  params: { geo: "US", lang: "en", type: "video", sort_by: "relevance" },
  headers: {
    "X-RapidAPI-Key": "3fdbee7856msh6aea22bd9c428b2p16efdejsneaeee50a53f7",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const getVideos = createAsyncThunk(
  "video/getVideos",
  async (catg, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseURL}?query=${catg}`, options);
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// reducer
export const videosSlice = createSlice({
  name: "videos",
  initialState: { videos: [], isLoading: false },
  reducers: {},
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.isLoading = true;
    },
    [getVideos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
    },
    [getVideos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default videosSlice.reducer;

// const keys = [
//   "b0a191bc4dmsh0ce106e0a903ab7p1b03b1jsnbf509c7302fd",
//   "389d894c91mshf4b4f7def540ae3p1bcc78jsn2079f211ec2d",
//   "4437b4cf0bmsh853167890a039dep1ff7fbjsn3fd485dc9031",
//   ]
