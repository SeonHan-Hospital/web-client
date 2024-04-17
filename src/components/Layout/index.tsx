import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Root>
        <Container>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Container>
      </Root>
    </>
  );
};

const Root = styled.div`
  display: flex;
  overflow-y: auto;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 0px 30px;
  overflow-x: auto;
  overflow-y: auto;
`;

const Content = styled.div<{ hideSideMenu?: boolean }>`
  /* margin-top: 10px; */
  padding-bottom: 30px;
`;
