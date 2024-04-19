/* eslint-disable */
import { createGlobalStyle, css } from "styled-components";

export const response = {
  desktop: 1200,
  pad: 768,
  mobile: 360,
};
export const px2vw = (size: number, width = response.pad) =>
  `${(size / width) * 100}vw`;
export const GlobalStyle = createGlobalStyle`
  /* 추가 공통 스타일  */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    /* 모바일 - 패드 중간값  필요할때 */
    @media (max-width: ${response.pad / 2}px) {}
    @media (min-width: ${response.pad / 2 + 1}px) and (max-width: ${
  response.pad
}px) {}
    /* 3단 반응형 */
    @media (max-width: ${response.pad}px) { }
    @media (min-width: ${response.pad + 1}px) and (max-width: ${
  response.desktop
}px) {  }
    @media (min-width: ${response.desktop + 1}px) {  }
  }
`;

const palette = {
  primary: "#00436D",
  primaryLight: "#1467B0",
};

const typography = {
  title1: {
    fontWeight: 700,
    fontSize: 36,
  },
  title2: {
    fontWeight: 500,
    fontSize: 36,
  },
  title3: {
    fontWeight: 500,
    fontSize: 32,
  },
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  palette,
  typography,
};

export const media = {
  desktop: "@media screen and (min-width: 1261px)",
  mobile: "@media screen and (max-width: 767px)",
  tablet: "@media screen and (max-width: 1260px)",
  tablet_mobile: "@media (max-width: 1260px) and (min-width: 768px)",
  desktop_mobile: "@media screen and (min-width: 768px)",
  desktop_tablet: "@media screen and (min-width: 1261px)",
};

export default theme;
