import styled from "styled-components";
import logo from "./logo.svg";
import { menus } from "./data";
import theme from "../../styles/theme";
import callIcon from "./call_icon.svg";
import { useCallback, useEffect, useState } from "react";
import { HeaderModal } from "./HeaderModal";
import MobileLogo from "./MobileLogo.svg";
import MobileIcon from "./MobileIcon.svg";

export const Header = () => {
  const [menuLefts, setMenuLefts] = useState<(number | undefined)[]>([]);
  const [isMenus, setIsMenus] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setMenuLefts([
          document.getElementById("menu0")?.getBoundingClientRect().left,
          document.getElementById("menu1")?.getBoundingClientRect().left,
          document.getElementById("menu2")?.getBoundingClientRect().left,
          document.getElementById("menu3")?.getBoundingClientRect().left,
          document.getElementById("menu4")?.getBoundingClientRect().left,
        ]);
        if (window.innerWidth > 768) {
          setIsMobile(false);
        } else {
          setIsMobile(true);
        }
        if (window.innerWidth > 1100) {
          setIsDesktop(true);
        } else {
          setIsDesktop(false);
        }
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);

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
      {isMobile ? (
        <MobileHeaderContainer>
          <MobileLogoWrapper>
            <MobileLogoImg
              src={MobileLogo}
              style={{ marginLeft: 10 }}
              alt="logo"
              width={151.37}
            />
          </MobileLogoWrapper>
          <MobileLogoImg src={MobileIcon} alt="icon" />
        </MobileHeaderContainer>
      ) : (
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
                  {isDesktop && "010-4654-9708"}
                </Call>
              </CallWrapper>
            </Wrapper>
          </HeaderContainer>
          {isMenus[0] && (
            <HeaderModal
              handleMouseOver={() => handleHoverMenus(0)}
              handleMouseOut={handleMouseOut}
              left={menuLefts[0] || 0}
              menus={[]}
            />
          )}
          {isMenus[1] && (
            <HeaderModal
              handleMouseOver={() => handleHoverMenus(1)}
              handleMouseOut={handleMouseOut}
              left={menuLefts[1] || 0}
              menus={[]}
            />
          )}
          {isMenus[2] && (
            <HeaderModal
              handleMouseOver={() => handleHoverMenus(2)}
              handleMouseOut={handleMouseOut}
              left={menuLefts[2] || 0}
              menus={[]}
            />
          )}
          {isMenus[3] && (
            <HeaderModal
              handleMouseOver={() => handleHoverMenus(3)}
              handleMouseOut={handleMouseOut}
              left={menuLefts[3] || 0}
              menus={[]}
            />
          )}
          {isMenus[4] && (
            <HeaderModal
              handleMouseOver={() => handleHoverMenus(4)}
              handleMouseOut={handleMouseOut}
              left={menuLefts[4] || 0}
              menus={[]}
            />
          )}
        </>
      )}
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
  max-width: 1260px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  align-items: center;
  height: 100px;
  /* background-color: black; */
`;

const LogoWrapper = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  cursor: pointer;
  height: 60px;
`;

const GnbContainer = styled.div`
  grid-column: span 8;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
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
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Call = styled.div`
  width: 198px;
  height: 48px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.primaryLight};
  color: white;
  border-radius: 4px;
`;

const MobileHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
`;

const MobileLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MobileLogoImg = styled.img`
  cursor: pointer;
`;
