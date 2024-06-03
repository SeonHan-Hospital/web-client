import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { AboutNavi } from "./data";
import { useState } from "react";
import { About1 } from "./About1";

export const About = () => {
  const [tap, setTap] = useState(0);

  return (
    <Layout>
      <MainImg />
      <Container>
        <NaviWrapper>
          {AboutNavi.map((el) => (
            <Navi key={el.id} spotlight={el.id === tap}>
              {el.label}
            </Navi>
          ))}
        </NaviWrapper>
        {tap === 0 && <About1 />}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 1260px;
`;

const MainImg = styled.div`
  width: 100vw;
  left: 0;
  height: 360px;
  background-color: gray;
`;

const NaviWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
`;

const Navi = styled.div<{ spotlight: boolean }>`
  height: 30px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  color: ${(props) => props.spotlight && "#1467B0"};
  cursor: pointer;
`;
