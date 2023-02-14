import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { Pagination } from "@mui/material";
import { Pagination } from "antd";

import { fetchRoomListAction } from "src/store/modules/entire/createActions";
import { EntirePaginationWrapper } from "./style";

const EntirePagination = memo(() => {
  // 从redux里获取数据
  const { totalCount, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  );

  // 小算法
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const nowPage = currentPage + 1;

  // 事件处理的逻辑
  const dispatch = useDispatch();
  function pageChangeHandle(event) {
    // 回到顶部
    window.scrollTo(0, 0);
    // 更新最新的页码：redux => currentPage
    dispatch(fetchRoomListAction(event - 1));
  }

  return (
    <EntirePaginationWrapper>
      {/* <Pagination
        defaultPage={startCount}
        count={totalPage}
        onChange={pageChangeHandle}
      ></Pagination>
      <div className="pagination-info">
        <span>第 {startCount } - {endCount} 个房源，</span>
        <span>共{totalCount}个</span>
      </div> */}
      <Pagination
        current={nowPage}
        total={totalCount}
        onChange={pageChangeHandle}
        showSizeChanger={false}
        pageSizeOptions={20}
      />
      <div className="pagination-info">
        <span>
          第 {startCount} - {endCount} 个房源，
        </span>
        <span>共{totalCount}个</span>
      </div>
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
