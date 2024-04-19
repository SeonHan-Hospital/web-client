import styled from "styled-components";
import logo from "./logo.svg";
import { menus } from "./data";
import theme from "../../styles/theme";
import callIcon from "./call_icon.svg";
import { useCallback, useEffect, useState } from "react";
import { HeaderModal } from "./HeaderModal";

export const Header = () => {
  const [menuLefts, setMenuLefts] = useState<(number | undefined)[]>([]);
  const [isMenus, setIsMenus] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setMenuLefts([
      document.getElementById("menu0")?.getBoundingClientRect().left,
      document.getElementById("menu1")?.getBoundingClientRect().left,
      document.getElementById("menu2")?.getBoundingClientRect().left,
      document.getElementById("menu3")?.getBoundingClientRect().left,
      document.getElementById("menu4")?.getBoundingClientRect().left,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const handleHoverMenus = useCallback((idx: number) => {
    const arr = new Array(5).fill(false);
    arr[idx] = true;
    setIsMenus(arr);
  }, []);

  const handleMouseOut = useCallback(() => {
    const arr = new Array(5).fill(false);
    setIsMenus(arr);
  }, []);

  return (
    <>
      <HeaderContainer fixed={true}>
        <Wrapper>
          <LogoWrapper>
            <Logo src={logo} alt="logo" />
          </LogoWrapper>
          <GnbContainer>
            {menus.map((el, idx) => (
              <Menu
                key={idx}
                id={`menu${idx}`}
                onMouseOver={() => handleHoverMenus(idx)}
                onMouseOut={handleMouseOut}
              >
                {el.label}
              </Menu>
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
      {isMenus[0] && <HeaderModal left={menuLefts[0] || 0} menus={[]} />}
      {isMenus[1] && <HeaderModal left={menuLefts[1] || 0} menus={[]} />}
      {isMenus[2] && <HeaderModal left={menuLefts[2] || 0} menus={[]} />}
      {isMenus[3] && <HeaderModal left={menuLefts[3] || 0} menus={[]} />}
      {isMenus[4] && <HeaderModal left={menuLefts[4] || 0} menus={[]} />}
    </>
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
  /* background-color: black; */
`;

const LogoWrapper = styled.div`
  grid-column: span 4;
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
  grid-column: span 5;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  width: 738px;
  margin: 0 20px;
  height: 100px;
`;

const Menu = styled.div`
  font-size: 20px;
  flex: 1;
  cursor: pointer;
  padding: 5px 10px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 67, 109, 0.05);
  }
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
