import styled from "styled-components";
import theme from "../../styles/theme";
import { Header3_1, TableDatas3_1, TableDatas3_2 } from "./data";

const TableHeader = () => {
  return (
    <HeaderContainer>
      {Header3_1.map((el) => (
        <HeaderSquare key={el.label} row={el.row} col={el.col}>
          {el.label}
        </HeaderSquare>
      ))}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 1000px;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

const HeaderSquare = styled.div<{ row: number; col: number }>`
  grid-row: span ${(props) => props.col};
  grid-column: span ${(props) => props.row};
  border: 0.5px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  background-color: ${theme.palette.primary};
`;

export const Table31 = () => {
  return (
    <>
      <TableHeader />
      <Container>
        {TableDatas3_1.map((el, idx) => (
          <Square key={idx} row={el.row} col={el.col} color={el.color}>
            {el.label}
          </Square>
        ))}
      </Container>
      <Container>
        {TableDatas3_2.map((el, idx) => (
          <Square key={idx} row={el.row} col={el.col} color={el.color}>
            {el.label}
          </Square>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Square = styled.div<{ row: number; col: number; color?: string }>`
  grid-row: span ${(props) => props.col};
  grid-column: span ${(props) => props.row};
  border: 0.5px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  ${(props) => props.color && `color: ${props.color};`}
`;
