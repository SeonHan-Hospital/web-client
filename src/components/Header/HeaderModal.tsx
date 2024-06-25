import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { emptyAlert } from "../../utils/functinos";

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
  const navigate = useNavigate();

  const handleNavi = useCallback(
    (path: string, tap: number) => {
      if (path === "/이용안내" || path === "/병원소개") {
        navigate(path, {
          state: {
            tap: tap,
          },
        });
      } else {
        emptyAlert();
      }
    },
    [navigate]
  );

  return (
    <Container
      left={left}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {menus.map((el) => (
        <Wrapper key={el.label} onClick={() => handleNavi(el.path, el.tap)}>
          {el.label}
        </Wrapper>
      ))}
    </Container>
  );
};

const Container = styled.div<{ left: number }>`
  width: 260px;
  position: fixed;
  left: ${({ left }) => left && left}px;
  top: 100px;
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
