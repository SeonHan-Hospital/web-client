import styled from "styled-components";

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
`;
