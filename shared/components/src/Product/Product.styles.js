import styled from "styled-components";

export const Products = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Product = styled.li`
  list-style: none;
  margin: 0 0 15px;
  &:last-child {
    margin: 0;
  }
`;

export const Tile = styled.figure`
  margin: 0;
  padding: 5px 15px;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  & > figcaption {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  font-size: 13px;
  padding: 0 0 0 25px;
  margin: 10px 0 10px;
`;

export const Price = styled.span`
  width: 100%;
  margin: 10px 0;
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
`;
