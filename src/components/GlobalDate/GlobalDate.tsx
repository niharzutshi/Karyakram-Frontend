import styled from "@emotion/styled";
import React from "react";

type GlobalDateProps = {};

const StyledBox = styled.div`
  color: white;
  cursor: default;
  position: relative;
  width: 100px;
  height: 70px;
  background-color: #36226d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-left: 20px solid #36226d;
    right: -20px;
  }
`;

const GlobalDate: React.FC<GlobalDateProps> = () => {
  return <StyledBox>8 Feb</StyledBox>;
};

export default GlobalDate;
