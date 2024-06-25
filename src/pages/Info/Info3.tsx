import styled from "styled-components";
import theme from "../../styles/theme";
import dotImg from "./dotImg.svg";
import { Table31 } from "./Table3_1";

export const Info3 = () => {
  return (
    <Container>
      <Title>진료안내</Title>
      <SubTitle>진료일정안내</SubTitle>
      <Table>
        <TableTextWrapper>
          <DotImg src={dotImg} />
          <div>진료시간 : 평일(월~금) 오전 08:30~오후 05:30</div>
        </TableTextWrapper>
        <TableTextWrapper>
          <DotImg src={dotImg} />
          <div>점심시간 : 오후 12:30~오후 01:30</div>
        </TableTextWrapper>
        <TableTextWrapper>
          <DotImg src={dotImg} />
          <div>토요일/일요일/공휴일 휴진</div>
        </TableTextWrapper>
      </Table>
      <SubTitle>진료일정안내</SubTitle>
      <TableWrapper>
        <Table31 />
      </TableWrapper>
      <SubTitle>외래진료 절차안내</SubTitle>
      <TableContainer>
        <TableHeader>
          <Text>외래진료 절차안내</Text>
        </TableHeader>
        <Cell>
          <Text>환자 본인 신분증 지참</Text>
          <Text>
            의료급여 환자의 경우, 1차 의료기관의 진료의뢰서를 반드시 지참 하셔야
            합니다.  (단, 본원이 선택병원의 경우는 제외)
          </Text>
        </Cell>
        <TableHeader>
          <Text>전화상담</Text>
        </TableHeader>
        <Cell>
          <Text>대표전화 : 064-722-0054</Text>
          <Text>가능시간 : 평일(월~금) 오전 08:30~오후 05:30</Text>
        </Cell>
        <TableHeader>
          <Text>방문접수</Text>
        </TableHeader>
        <Cell>
          <Text>접수장소 : 진료신청서 작성 후 원무접수창구에서 접수</Text>
          <Text>가능시간 : 평일(월~금) 오전 08:30~오후 05:30</Text>
        </Cell>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  margin: 80px 0;

  @media only screen and (max-width: 1000px) {
    display: block;
    width: 100vw;
  }
`;

const Title = styled.div`
  width: 100%;
  margin-top: 70px;
  height: 72px;
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  ${theme.typography.title1};

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const Table = styled.div`
  width: 1000px;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  padding-bottom: 10px;
  padding-top: 10px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.08);

  @media only screen and (max-width: 1000px) {
    margin-bottom: 40px;
    width: 90%;
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

const DotImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

const TableTextWrapper = styled.div`
  display: flex;
  margin: 10px 10px 10px 25px;
  align-items: center;
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 80px;

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const TableHeader = styled.div`
  background-color: ${theme.palette.primary};
  color: white;
  width: 100%;
  height: 60px;
  display: flex;
  border: 0.5px solid #dddddd;
  font-weight: bold;
  align-items: center;
`;

const Text = styled.div`
  margin: 20px;
  font-size: 18px;
`;

const Cell = styled.div`
  border: 0.5px solid #dddddd;
  width: 100%;
`;
