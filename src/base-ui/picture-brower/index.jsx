import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import classNames from "classnames";

import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";
import Indicator from "../indicator";
import { PictureBrowerWrapper } from "./style";

const PictureBrower = memo((props) => {
  const { pictureUrls = [], closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);

  // 当图片浏览器展示出来时，滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // 当关闭图片浏览器时恢复可滚动状态
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 关闭事件
  function closeBtnClickHandle() {
    closeClick();
  }

  // 左右按钮点击事件
  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) {
      newIndex = pictureUrls.length - 1;
    }
    if (newIndex > pictureUrls.length - 1) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  // 显示/隐藏照片列表点击事件
  function toggleShowListHandle(){
    setShowList(!showList)
  }

  // 底部预览图片点击事件
  function imgItemClickHandle(index) {
    setCurrentIndex(index)
    setIsNext(index > currentIndex)
  }

  return (
    <PictureBrowerWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              timeout={150}
              classNames="fade"
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndex+1}/{pictureUrls.length}:</span>
              <span> room Apartment图片{currentIndex+1}</span>
              </div>
            <div className='toggle' onClick={toggleShowListHandle}>
              隐藏照片列表
              { showList ? <IconTriangleBottom/>: <IconTriangleTop/> }
            </div>
          </div>
          <div className='list' style={{height: showList ? "67px": "0"}}>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div 
                      className={classNames("item", {active: index === currentIndex})} 
                      key={item}
                      onClick={e => imgItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowerWrapper>
  );
});

PictureBrower.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrower;
