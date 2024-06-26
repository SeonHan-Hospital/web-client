import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { response } from "../../styles/theme";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <Root translate="no">
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  overflow-y: auto;
  font-family: "Noto Sans KR";
  height: 100vh;

  -webkit-user-select: none; /* for Chrome/Safari */
  -moz-user-select: none; /* for Firefox */
  -ms-user-select: none; /* for IE/Edge */
  user-select: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  overflow-x: auto;
  overflow-y: auto;

  @media only screen and (max-width: ${response.desktop}px) {
    margin-top: 60px;
  }
`;

const Content = styled.div<{ hideSideMenu?: boolean }>`
  /* margin-top: 10px; */
  /* padding-bottom: 30px; */
`;
