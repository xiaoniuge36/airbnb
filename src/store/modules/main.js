// 存放整个项目里公共的部分
import {createSlice} from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      // 需不需要顶部有透明度
      isTopAlpha: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, {payload}) {
      state.headerConfig = payload
    }
  }
})

export const {
  changeHeaderConfigAction,
} = mainSlice.actions

export default mainSlice.reducer