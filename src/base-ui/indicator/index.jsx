import React, { memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const scrollRef = useRef();

  useEffect(() => {
    // 获取selectIndex对应的那个item
    const selectItemEl = scrollRef.current.children[selectIndex];
    // 获取selectIndex对应的那个item的offsetLeft
    const selectItemOffsetLeft = selectItemEl.offsetLeft;
    // 获取selectIndex对应的那个item的宽度
    const selectItemWidth = selectItemEl.clientWidth;

    // 获取control的宽度
    const scrollElWidth = scrollRef.current.clientWidth;
    // 获取control的
    const scrollElScroll = scrollRef.current.scrollWidth;

    // 获取selectIndex要滚动的距离
    let distance =
      selectItemWidth * 0.5 + selectItemOffsetLeft - scrollElWidth * 0.5;

    // 左边特殊情况处理
    if (distance < 0) distance = 0;
    // 右边特殊情况处理
    if (distance > scrollElScroll - scrollElWidth)
      distance = scrollElScroll - scrollElWidth;
    // 动画
    scrollRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="scroll" ref={scrollRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.roppTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
