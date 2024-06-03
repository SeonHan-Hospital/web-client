import styled from "styled-components";
import { HeaderMenus, TableDatas } from "./data";
import theme from "../../styles/theme";
import { ITableData } from "./data";

const TableHeader = () => {
  return (
    <HeaderContainer>
      {HeaderMenus.map((el) => (
        <HeaderSquare key={el.label} row={el.row} col={el.col}>
          {el.label}
        </HeaderSquare>
      ))}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 1000px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(2, 1fr);
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

const Cell = ({ props }: { props: ITableData }) => {
  return (
    <CellContainer>
      <CellSquare col={25}>{props.type}</CellSquare>
      <CellSquare col={12}>{props.code}</CellSquare>
      <CellSquare col={33}>{props.name}</CellSquare>
      <CellSquare col={10} end={true}>
        {props.price}
      </CellSquare>
      <CellSquare col={10} end={true}>
        {props.min}
      </CellSquare>
      <CellSquare col={10} end={true}>
        {props.max}
      </CellSquare>
    </CellContainer>
  );
};

const CellContainer = styled.div`
  width: 1000px;
  height: 40px;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
`;

const CellSquare = styled.div<{ col: number; end?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.end ? "end" : "center")};
  align-items: center;
  grid-column: span ${(props) => props.col};
  font-size: 14px;
  padding-right: ${(props) => (props.end ? "10px" : "0px")};
  border: 0.5px solid #dddddd;
`;

export const Table = () => {
  return (
    <>
      <TableHeader />
      {TableDatas.map((el, idx) => (
        <Cell key={idx} props={el} />
      ))}
    </>
  );
};
