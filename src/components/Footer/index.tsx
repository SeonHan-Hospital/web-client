import styled from "styled-components";
import theme, { response } from "../../styles/theme";
import { FooterTexts, MobileFooterTexts } from "./data";
import { TextBox } from "../../styles/common";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [footers, setFooters] = useState(FooterTexts);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleFooterData = () => {
        if (window.innerWidth > 1261) {
          setFooters(FooterTexts);
        } else {
          setFooters(MobileFooterTexts);
        }
      };

      window.addEventListener("resize", handleFooterData);

      handleFooterData();

      return () => window.removeEventListener("resize", handleFooterData);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);

  return (
    <FooterContainer>
      <Wrapper>
        {footers.map((el, idx) => (
          <TextBox
            key={idx}
            start={el.start}
            size={el.size}
            label={el.label}
            fontSize={el.fontSize}
            color={el.color}
            fontWeight={el.fontWeight}
            row={el.row}
            rowsize={el.rowsize}
          >
            {el.label}
          </TextBox>
        ))}
      </Wrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100vw;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${theme.palette.primary};

  @media only screen and (max-width: ${response.desktop}px) {
    width: 280px;
    height: 512px;
  }
`;

const Wrapper = styled.div`
  width: 1260px;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);
  column-gap: 24px;

  @media only screen and (max-width: ${response.desktop}px) {
    padding: 0 15px;
    height: 472px;
    width: 250px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
`;
