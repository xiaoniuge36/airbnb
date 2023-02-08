import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
  const res = await getHomeGoodPriceData();

  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPriceInfo } = homeSlice.actions;

export default homeSlice.reducer;
