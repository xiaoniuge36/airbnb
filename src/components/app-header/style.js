// 专门写样式，利用 styled-components 进行

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .content {
    position: relative;
    z-index: 19;
    transition: all 250ms ease;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(255,255,255,1)"};
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
    /* .search-area {
      height: 100px;
    } */
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.18);
  }
`;

export const SearchAreaWrapper = styled.div`
  height: ${(props) => (props.isSearch ? "100px" : "0px")};
  transition: height 250ms ease;
`;
