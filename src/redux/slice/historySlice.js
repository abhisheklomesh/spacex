import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/http";
import apiUrl from "../../services/config.json";

const url = apiUrl.apiUrl + "history";
export const getHistory = createAsyncThunk(
  "api/getHistory",
  async (data, thunkApi) => {
    try {
      const response = await http.get(url);
      return response.data;
    } catch (error) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHistory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default historySlice.reducer;
