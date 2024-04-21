import styled from "styled-components";
import { response } from "./theme";

export interface IGridBoxProps {
  label?: string;
  start?: number;
  size?: number;
  row?: number;
  rowsize?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}

export const TextBox = styled.div<IGridBoxProps>`
  ${(props) => `
    grid-column: ${props.start} / span ${props.size};
    grid-row: ${props.row} / span ${props.rowsize};
    font-weight: ${props.fontWeight && props.fontWeight};
    font-size: ${props.fontSize && props.fontSize}px;
    color: ${props.color && props.color};
  `}
  white-space: pre;

  @media only screen and (max-width: ${response.mobile}px) {
    grid-column: span 6;
    grid-row: ${(props) => `${props.row} / span ${props.rowsize}`};
    width: 240px;
    display: flex;
    align-items: end;
    padding: 10px 0;
    margin: auto;
  }
`;
