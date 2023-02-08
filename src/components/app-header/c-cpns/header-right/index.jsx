import React, { memo, useState, useEffect } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_logo";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  const [showPanel, setshowPaned] = useState(false);

  useEffect(() => {
    //window点击事件监听，点击其他地方时，关闭下拉框 设置为false
    function windowHandleClick() {
      // 这里的函数名字可以随便起，但是要和下面的一致
      setshowPaned(false);
      console.log("windowHandleClick");
    }
    window.addEventListener("click", windowHandleClick, true); //监听点击事件设置为捕获阶段不让冒泡
    return () => {
      //卸载组件时，清除事件监听
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  function profileClickHandle() {
    setshowPaned(true);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
