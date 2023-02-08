import styled from "styled-components";

// `` 模板字符串相当于函数调用，可以传入参数
// ${} 用来传入参数，传入参数的时候，需要用到 ${}，否则会被当做字符串处理
// style.div 意思是创建一个 div 标签 并且给这个标签添加样式
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
`;
