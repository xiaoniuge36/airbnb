import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

// 封装获取网络请求的逻辑
export const fetchRoomListAction = (page = 0) => {
  // 返回一个新函数
  return async (dispatch, getState) => {
    // 0.修改currentPage
    dispatch(changeCurrentPageAction(page));
    // 1. 根据页码获取最新数据
    // const currentPage = getState().entire.currentPage
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    // const res = await getEntireRoomList(page);
    dispatch(changeIsLoadingAction(false));
    // 2. 获取到最新数据，保存到redux的store里
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
