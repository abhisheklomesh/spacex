import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/http";
import apiUrl from "../../services/config.json";
const url = apiUrl.apiUrl + "payloads";

export const getPayload = createAsyncThunk(
  "api/getpayloads",
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

const payloadSlice = createSlice({
  name: "payload",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPayload.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPayload.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPayload.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default payloadSlice.reducer;
