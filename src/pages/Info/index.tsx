import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { AboutNavi } from "./data";
import { useCallback, useState } from "react";
import { Info1 } from "./Info1";
import { Info2 } from "./Info2";
import { useLocation } from "react-router-dom";
import { Info3 } from "./Info3";
import { Info4 } from "./Info4";

export const Info = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  const location = useLocation();
  const stateTap = location.state ? location.state.tap : 0;
  const [tap, setTap] = useState(stateTap);

  const handleTap = useCallback((idx: number) => {
    setTap(idx);
  }, []);

  return (
    <Layout>
      <Main src={`${IMGURL}infoBackground.svg`} alt="background" />
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
        {tap === 0 && <Info1 />}
        {tap === 1 && <Info3 />}
        {tap === 2 && <Info2 />}
        {tap === 3 && <Info4 />}
      </Container>
    </Layout>
  );
};

const Main = styled.img`
  width: 100vw;
  object-fit: cover;
  min-height: 200px;
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
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const NaviBox = styled.div`
  height: 66px;
  display: flex;
  justify-content: center;
  margin: 7px auto;
  align-items: center;
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
