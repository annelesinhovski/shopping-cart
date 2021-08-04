import styled from "styled-components";

export const ListPrices = styled.ul`
  padding: 0;
  margin: 0;
`;

export const PriceItem = styled.li`
  list-style: none;
  font-size: 14px;
  div {
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
    p {
      margin: 0;
      span {
        color: ${({ theme }) => theme.orange};
      }
      strong {
        display: block;
        padding: 10px 0 0;
      }
    }
  }
`;
