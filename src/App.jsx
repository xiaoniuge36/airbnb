import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom"; //不是结构赋值 跟原来的一样，结构赋值是进行赋值的 但是这里是引入 叫符号绑定
import routes from "@/router";
import AppHeader from "./components/app-header/index";
import AppFooter from "./components/app-footer";
import useScrollTop from "./hooks/useScrollTop";

const App = memo(() => {
  // 监听页面切换，只要页面切换就使其滚动到顶部
  useScrollTop();
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="app">{useRoutes(routes)}</div>;
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;
