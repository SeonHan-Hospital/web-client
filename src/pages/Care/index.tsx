import { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AboutNavi } from "./data";
import { Care1 } from "./Care1";

export const Care = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  const location = useLocation();
  const stateTap = location.state ? location.state.tap : 0;
  const [tap, setTap] = useState(stateTap);

  const handleTap = useCallback((idx: number) => {
    setTap(idx);
  }, []);

  useEffect(() => {
    setTap(stateTap);
  }, [stateTap]);

  return (
    <Layout>
      <Main src={`${IMGURL}careBack.svg`} alt="background" />
      <Container>
        <NaviWrapper>
          <NaviBox>
            {AboutNavi.map((el) => (
              <Navi
                key={el.id}
                spotlight={el.id === tap}
                onClick={() => handleTap(el.id)}
              >
                {el.label}
              </Navi>
            ))}
          </NaviBox>
        </NaviWrapper>
        {tap === 0 && <Care1 />}
        {/* {tap === 1 && <Intro2 />} */}
        {/* {tap === 2 && <Intro3 />} */}
      </Container>
    </Layout>
  );
};

const Main = styled.img`
  width: 100vw;
  min-height: 200px;
  object-fit: cover;
`;

const Container = styled.div`
  margin: auto;
  max-width: 1260px;
`;

const NaviWrapper = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eeeeee;
  overflow-x: auto;
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

const NaviBox = styled.div`
  height: 66px;
  display: flex;
  justify-content: center;
  margin: 7px auto;
  align-items: center;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const Navi = styled.div<{ spotlight: boolean }>`
  height: 66px;
  min-width: 123px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  color: ${(props) => props.spotlight && "#1467B0"};
  cursor: pointer;
`;
