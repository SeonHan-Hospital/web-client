import styled from "styled-components";
import theme from "../../styles/theme";
import { Table } from "./Table";

export const Info1 = () => {
  return (
    <Container>
      <Title>비급여 항목 안내</Title>
      <SubTitle>
        환자의 건강과 회복을 위해 언제나 최선을 다하고 있습니다.
      </SubTitle>
      <TableWrapper>
        <Table />
      </TableWrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1260px;
`;

const Title = styled.div`
  width: 100%;
  margin-top: 70px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.typography.title1};
`;

const SubTitle = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  margin: 80px 0;

  @media only screen and (max-width: 1000px) {
    display: block;
    width: 100vw;
  }
`;
