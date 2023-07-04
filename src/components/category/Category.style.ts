import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 40px;
  height: 30px;
  width: max-content;
  padding: 0px 16px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
