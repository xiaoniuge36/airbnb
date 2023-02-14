import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
// import Rating from "@mui/material/Rating";
import { Carousel, Rate } from "antd";

import { ItemWrapper } from "./style";
import IconArrowLeft from "src/assets/svg/icon-arrow-left";
import IconArrowRight from "src/assets/svg/icon-arrow-right";
import Indicator from "src/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const sliderRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  // 左右按钮点击事件
  function controlClickHandle(e, isRight = true) {
    e.stopPropagation();
    // 上一个/下一个面板
    isRight ? sliderRef.current.next() : sliderRef.current.prev();

    // 获取最新索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  // 监听 item 的点击
  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {!itemData.picture_urls ? (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        ) : (
          <div className="silder">
            <div className="control">
              <div
                className="btn left"
                onClick={(e) => controlClickHandle(e, false)}
              >
                <IconArrowLeft width="24" height="24" />
              </div>
              <div
                className="btn right"
                onClick={(e) => controlClickHandle(e, true)}
              >
                <IconArrowRight width="24" height="24" />
              </div>
            </div>
            <div className="indicator">
              <Indicator selectIndex={selectIndex}>
                {itemData.picture_urls.map((item, index) => {
                  return (
                    <div className="item" key={item}>
                      <span
                        className={classNames("dot", {
                          active: selectIndex === index,
                        })}
                      ></span>
                    </div>
                  );
                })}
              </Indicator>
            </div>
            <Carousel dots={false} ref={sliderRef}>
              {itemData?.picture_urls?.map((item) => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
        <div className="desc">{itemData.verify_info.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          {/* <Rating
            value={itemData.star_rating ?? 5}
            size="small"
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A" }}
          ></Rating> */}
          <Rate
            allowHalf
            disabled
            defaultValue={itemData.star_rating ?? 5}
            style={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info?.content && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
