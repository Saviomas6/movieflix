import styled from "styled-components";

export const NotFoundPageContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NotFoundPageHeading = styled.h1`
  font-size: 80px;
  color: #fff;
  text-align: center;
`;

export const NotFoundPageSubHeading = styled.h3`
  font-size: 40px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

export const NotFoundPageDescription = styled.div`
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const HomeButton = styled.button`
  height: 50px;
  width: max-content;
  padding: 0 16px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background-color: #b269f6;
  border-radius: 10px;
  cursor: pointer;
`;
