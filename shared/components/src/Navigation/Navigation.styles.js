import styled from "styled-components";

export const Menu = styled.ul`
  padding: 10px 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 29, 0.22);
`;

export const MenuItem = styled.li`
  list-style: none;
  & > span {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.lightGray};
    strong {
      color: ${({ theme }) => theme.orange};
    }
  }
`;
