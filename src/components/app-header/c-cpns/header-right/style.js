import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.textColor.primaryColor};

  .btns {
    display: flex;
    font-weight: 600;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.textColor.primaryColor};
    box-sizing: border-box;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    color: ${props => props.theme.textColor.primaryColor};
    /* 混入 */

    ${props =>props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.18);
      .top,.bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          color: #666;

          &:hover {
            background-color: ${props => props.theme.bgColor.primaryColor};
          }
        }
      }

      .top {
        border-bottom: 1px solid #eee;
      }
    }
  }
`