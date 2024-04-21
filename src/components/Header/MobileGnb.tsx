import styled from "styled-components";
import { menus } from "./data";
import down from "./down.svg";

export const MobileGNB = () => {
  return (
    <Container>
      <Backdrop />
      {menus.map((el, idx) => (
        <Menu key={idx}>
          <MenuText>{el.label}</MenuText>
          <IconWrapper>
            <img src={down} alt="down" />
          </IconWrapper>
        </Menu>
      ))}
    </Container>
  );
};

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 1;
  background-color: white;
`;

const Container = styled.div`
  height: calc(100vh - 60px);
  position: fixed;
  background-color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 2;
  overflow-y: hidden;
`;

const Menu = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const MenuText = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;
