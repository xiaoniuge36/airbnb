import { configureStore } from "@reduxjs/toolkit";
// TPK 方式写redux
import homeReducer from "./modules/home";
import detailReducer from "./modules/detail";
import mainReducer from "./modules/main";
//原始方式写redux
import entireReducer from "./modules/entire";

const store = configureStore({
  reducer: {
    home: homeReducer, //createSlice创建的reducer
    entire: entireReducer, //createReducer创建的reducer 传统方式
    detail: detailReducer,
    main: mainReducer,
  },
});

export default store;

// 该例子用了两种方式创建
//一是用RTK只有一个文件夹
//二是用传统方式有多个文件夹
