import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.orange};
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    display: block;
    margin: 0 auto;
  }
`;
