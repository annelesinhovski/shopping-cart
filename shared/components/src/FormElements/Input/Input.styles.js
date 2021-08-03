import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 5px 0;
`;

export const InputBase = styled.input`
  width: 94%;
  padding: 14px 3%;
  border: 1px solid #787878;
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  &:focus,
  &:focus-visible {
    border-radius: 3px;
    border: 1px solid #a43287;
  }
`;

export const Label = styled.span`
  line-height: 150%;
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.lightGray};
`;
