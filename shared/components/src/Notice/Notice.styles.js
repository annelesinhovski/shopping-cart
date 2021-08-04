import styled from "styled-components";

export const Wrapper = styled.aside`
  margin: 20px auto 0;
  padding: 0;
`;

export const Image = styled.img`
  margin: 0 auto;
  display: block;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.orange};
  text-transform: uppercase;
`;
