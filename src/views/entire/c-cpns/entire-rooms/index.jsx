import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RoomItem from "src/components/room-item";
import { changeDetailInfoAction } from "src/store/modules/detail";

import { EntireRoomsWrapper } from "./style";

const EntireRooms = memo(() => {
  // 从redux里获取数据
  const { roomList,  totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual);

  // item点击事件
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  }, [navigate, dispatch])

  return (
    <EntireRoomsWrapper>
      <h3 className="title">共{totalCount}多处住所</h3>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" itemClick={itemClickHandle} key={item._id} />;
        })}
      </div>

      {/**有网络请求的时候才显示，否则隐藏 */}
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
