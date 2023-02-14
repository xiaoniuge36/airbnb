import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchRoomListAction } from "@/store/modules/entire/createActions";
import { changeHeaderConfigAction } from "@/store/modules/main";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRooms from "./c-cpns/entire-rooms";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  // 发送请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, isTopAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
