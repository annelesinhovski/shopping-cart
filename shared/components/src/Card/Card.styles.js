import styled from "styled-components";

export const CardBody = styled.div`
  padding: 10px 12px;
  margin: 5px 0 20px;
  background: ${(x) => (x.themeWhite ? "#FFFFFF" : "none")};
  box-shadow: ${(x) =>
    x.themeWhite ? "0px 2px 5px 0px rgba(0, 0, 29, 0.22)" : "none"};
  border: ${(x) => (x.themeWhite ? "none" : "1px solid #CCCCCC")};
  border-radius: 3px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
`;

export const Item = styled.li``;
