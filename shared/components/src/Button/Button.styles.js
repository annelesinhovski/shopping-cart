import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 17px 0;
  background: ${({ theme }) => theme.orange};
  transition: all 0.3s linear;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;

  cursor: pointer;
  border-radius: 3px;
  border: 0;
  border-bottom: 3px solid ${({ theme }) => theme.darkerOrange};

  &:hover {
    background: ${({ theme }) => theme.darkOrange};
    border-bottom: 3px solid ${({ theme }) => theme.darkOrange};
  }
`;
