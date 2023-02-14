import React, { memo, useEffect, useState } from "react";
import IconAvatar from "src/assets/svg/icon_avatar";
import IconGlobal from "src/assets/svg/icon_global";
import IconMenu from "src/assets/svg/icon_menu";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  /**
   * 处理状态
   */
  const [showPanel, setShowPanel] = useState(false);

  /**
   * panel面板逻辑
   */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }

    window.addEventListener('click', windowHandleClick, true)

    // 取消监听
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  const profileClickHandle = () => {
    setShowPanel(true)
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
