import styled from "styled-components";
import theme from "../../styles/theme";
import info2_1 from "./info2_1.svg";
import info2_2 from "./info2_2.svg";
import info2_3 from "./info2_3.svg";
import info2_4 from "./info2_4.svg";
import dotImg from "./dotImg.svg";
import info2_5 from "./info2_5.svg";
import info2_6 from "./info2_6.svg";
import info2_7 from "./info2_7.svg";
import info2_8 from "./info2_8.svg";

export const Info2 = () => {
  return (
    <Container>
      <Title>입원절차</Title>
      <ImgContainer>
        <Img src={info2_1} />
        <Img src={info2_2} />
        <Img src={info2_3} />
        <Img src={info2_4} />
      </ImgContainer>
      <TableContainer>
        <Table>
          <TableTitle>입원시 필요서류</TableTitle>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>환자신분증, 진단서(치료확인서)</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>검사결과지(내원 7일 이내)</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>영상CD</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>수술 기록지</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>연하장애평가검사(VFSS)</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>퇴원약 복약지도서</div>
          </TableTextWrapper>
        </Table>
        <Table>
          <TableTitle>준비물품</TableTitle>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>세면도구, 개인위생용품</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>복용 중인 약</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>속옷, 실내화 등</div>
          </TableTextWrapper>
        </Table>
      </TableContainer>
      <Title>퇴원절차</Title>
      <ImgContainer>
        <Img src={info2_5} />
        <Img src={info2_6} />
        <Img src={info2_7} />
        <Img src={info2_8} />
      </ImgContainer>
      <TableContainer>
        <Table>
          <TableTitle>증명서 발급</TableTitle>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>재 증명서 및 의무기록사본</div>
          </TableTextWrapper>
        </Table>
        <Table>
          <TableTitle>퇴원 약</TableTitle>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>퇴원 후 복용 약이 있는 경우</div>
          </TableTextWrapper>
          <TableTextWrapper>
            <DotImg src={dotImg} />
            <div>다음 진료 예약</div>
          </TableTextWrapper>
        </Table>
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

const ImgContainer = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 60px;
  margin-bottom: 35px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-column-gap: auto;
  }
`;

const Img = styled.img`
  width: 180px;
  object-fit: cover;
  height: 264px;
  grid-column: span 1;

  @media only screen and (max-width: 500px) {
    width: 120px;
    height: 180px;
  }
`;

const TableContainer = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
  margin-bottom: 96px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-bottom: 56px;
  }
`;

const Table = styled.div`
  width: 470px;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  padding-bottom: 10px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.08);

  @media only screen and (max-width: 1000px) {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

const TableTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0 20px 25px;
`;

const DotImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

const TableTextWrapper = styled.div`
  display: flex;
  margin: 0 10px 10px 25px;
  align-items: center;
`;
