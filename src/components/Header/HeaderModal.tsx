import styled from "styled-components";

interface IProps {
  menus: any[];
  left: number;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
}

export const HeaderModal = ({
  menus,
  left,
  handleMouseOver,
  handleMouseOut,
}: IProps) => {
  return (
    <Container
      left={left}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Wrapper>병원장 인사말 & 의료진 소개</Wrapper>
      <Wrapper>병원장 인사말 & 의료진 소개</Wrapper>
    </Container>
  );
};

const Container = styled.div<{ left: number }>`
  width: 260px;
  position: fixed;
  left: ${({ left }) => left && left}px;
  top: 100;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 240px;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 67, 109, 0.05);
  }
`;
