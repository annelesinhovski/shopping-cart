import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 10px 0 15px;
`;

export const InputBase = styled.input`
  width: 94%;
  padding: 14px 3%;
  border: 1px solid ${(x) => (x.variant === "error" ? "red" : "#e7e7e7")};
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.22);
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

export const ErrorMessage = styled.span`
  line-height: 150%;
  display: block;
  font-size: 12px;
  color: #f30;
`;
