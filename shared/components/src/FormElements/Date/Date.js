import styled from "styled-components";

export const Date = styled.div`
  display: flex;
  & > div {
    &:first-child {
      width: 61%;
      margin: 10px 4% 15px 0;
    }
    &:last-child {
      width: 35%;
    }
  }
`;
