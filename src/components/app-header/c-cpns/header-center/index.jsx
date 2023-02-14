import React, { memo, useState } from "react";
import { CSSTransition } from "react-transition-group";

import IconSearchBar from "src/assets/svg/icon-search-bar";
import SearchTabs from "./c-cpns/search-tabs";
import { CenterWrapper } from "./style";
import searchTitles from "@/assets/data/search_titles";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;

  const [tabIndex, setTabIndex] = useState(0);

  /** 过滤数据 */
  const titles = searchTitles.map((item) => item.title);

  // 判断当前点击的是哪一个tab
  function tabClickHandle(index) {
    setTabIndex(index);
  }

  // 搜索框点击事件
  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
      in={isSearch}
      classNames="detail"
      timeout={250}
      unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={tabClickHandle} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
