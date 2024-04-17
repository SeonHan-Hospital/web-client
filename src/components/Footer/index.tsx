import styled from "styled-components";
import theme from "../../styles/theme";
import { FooterTexts } from "./data";
import { TextBox } from "../../styles/common";

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        {FooterTexts.map((el, idx) => (
          <TextBox
            key={idx}
            start={el.start}
            size={el.size}
            label={el.label}
            fontSize={el.fontSize}
            color={el.color}
            fontWeight={el.fontWeight}
            row={el.row}
            rowSize={el.rowSize}
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
  position: absolute;
  left: 0;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${theme.palette.primary};
`;

const Wrapper = styled.div`
  width: 1260px;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);
  column-gap: 24px;
`;
