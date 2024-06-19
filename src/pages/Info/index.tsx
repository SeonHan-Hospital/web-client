import styled from "styled-components";
import { Layout } from "../../components/Layout";
import background from "./background.svg";
import { AboutNavi } from "./data";
import { useCallback, useState } from "react";
import { Info1 } from "./Info1";
import { emptyAlert } from "../../utils/functinos";
import { Info2 } from "./Info2";

export const Info = () => {
  const [tap, setTap] = useState(0);

  const handleTap = useCallback((idx: number) => {
    if (idx === 2) {
      emptyAlert();
    } else {
      setTap(idx);
    }
  }, []);

  return (
    <Layout>
      <MainImg style={{ backgroundImage: `url(${background})` }} />
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
        {tap === 1 && <Info2 />}
      </Container>
    </Layout>
  );
};

const MainImg = styled.div`
  width: 100vw;
  /* min-width: 1260px; */
  height: 360px;
  background: center / cover no-repeat;
  display: flex;
  justify-content: start;
  align-items: end;
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
  width: 430px;
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
