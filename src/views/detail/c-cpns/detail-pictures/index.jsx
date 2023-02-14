import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { DetailPicturesWrapper } from "./style";
import PictureBrower from "src/base-ui/picture-brower";

const DetailPictures = memo((props) => {
  const { pictureUrls } = props;
  // 控制是否显示图片浏览器
  const [showBrowser, setShowBrowser] = useState(false);

  // 点击左/右侧/查看照片图片，显示图片浏览器
  function showBrowserHandle() {
    setShowBrowser(true);
  }

  // 关闭显示图片浏览器
  function handleCloseClick() {
    console.log("close");
    setShowBrowser(false);
  }

  return (
    <DetailPicturesWrapper>
      <div className="top">
        <div className="left">
          <div className="item" onClick={showBrowserHandle}>
            <img src={pictureUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {pictureUrls.slice(1, 5).map((item, index) => {
            return (
              <div className="item" key={item} onClick={showBrowserHandle}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={showBrowserHandle}>
        查看照片
      </div>
      {showBrowser && (
        <PictureBrower
          pictureUrls={pictureUrls}
          closeClick={handleCloseClick}
        />
      )}
    </DetailPicturesWrapper>
  );
});

DetailPictures.propTypes = {
  pictureUrls: PropTypes.array,
};

export default DetailPictures;
