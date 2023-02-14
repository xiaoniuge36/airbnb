import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";
import DetailPictures from "./c-cpns/detail-pictures";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  // 获取redux中的数据
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, isTopAlpha: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
