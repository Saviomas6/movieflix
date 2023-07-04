import styled from "styled-components";
export const InputFieldWrapper = styled.div`
  height: 50px;
  margin: 20px 0;
  position: relative;
`;

export const InputField = styled.input`
  height: 50px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 0 26px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  ::placeholder {
    color: #808080;
  }
  @media screen and (max-width: 480px) {
    height: 45px;
    padding: 0 18px;
    font-size: 16px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 25px;
  color: #808080;
  position: absolute;
  top: 13px;
  right: 15px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const NavTabWrapper = styled.div`
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const NavTab = styled.div<any>`
  font-size: 24px;
  color: ${({ tab }) => (tab ? "#B269F6" : "#fff")};
  font-weight: ${({ tab }) => (tab ? 600 : 400)};
  padding: 8px 0;
  border-bottom: ${({ tab }) => (tab ? "3px solid #B269F6" : "none")};
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
