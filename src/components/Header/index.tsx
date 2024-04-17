import styled from "styled-components";
import logo from "./logo.svg";
import { menus } from "./data";
import theme from "../../styles/theme";
import callIcon from "./call_icon.svg";

export const Header = () => {
  return (
    <HeaderContainer fixed={true}>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
        </LogoWrapper>
        <GnbContainer>
          {menus.map((el, idx) => (
            <Menu key={idx}>{el.label}</Menu>
          ))}
        </GnbContainer>
        <CallWrapper>
          <Call>
            <img
              src={callIcon}
              alt="icon"
              width={28}
              style={{ marginRight: "10px" }}
            />
            010-4654-9708
          </Call>
        </CallWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ fixed: boolean }>`
  position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Wrapper = styled.div`
  width: 1260px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  align-items: center;
  height: 100px;
`;

const LogoWrapper = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 252.29px;
  cursor: pointer;
  height: 60px;
`;

const GnbContainer = styled.div`
  grid-column: span 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 738px;
  margin: 0 20px;
  height: 100px;
`;

const Menu = styled.span`
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
`;

const CallWrapper = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Call = styled.div`
  width: 198px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.primaryLight};
  color: white;
  border-radius: 4px;
`;
