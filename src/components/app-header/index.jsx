import classNames from "classnames";
import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import useScrollPosition from "src/hooks/useScrollPosition";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo(() => {
  /**定义组件内部切换的状态 */
  const [isSearch, setIsSearch] = useState(false);

  // 从 redux 中获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, isTopAlpha } = headerConfig;

  // 搜索框点击事件
  function searchBarClick() {
    setIsSearch(true);
  }

  // 监听滚动
  const { scrollY } = useScrollPosition();
  let prevY = useRef(0); // 记录上一次滚动的距离
  // 正常情况下（未弹出搜索框功能的情况下），正常记录
  if (!isSearch) {
    prevY.current = scrollY;
  }

  // console.log("scrollY", scrollY);
  // console.log("prevY", prevY.current);
  // 在弹出搜索功能的情况下：滚动的距离大于之前记录的距离30
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
    setIsSearch(false);
  }
  // 透明度逻辑
  const isAlpha = isTopAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={searchBarClick}
            ></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
