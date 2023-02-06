//第三方
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

//自己写的
import App from "./App";
import "normalize.css";
import "./assets/css/index.less";
import store from "./store";
//配置别名的方法
// @ => src
// 问题 react脚手架隐藏了webpack配置文件
// 解决方案 1. npm run eject
//解决方案 2. craco => create-react-app configuration override

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
