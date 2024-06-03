import styled from "styled-components";
import theme from "../../styles/theme";

export const About1 = () => {
  return (
    <Container>
      <TitleContainer>
        <TitleWrapper>인사말</TitleWrapper>
        <ContentsContainer>
          <Contents>
            <ContentsTitle>제목은 여기입니다</ContentsTitle>
            <ContentsDetail>
              언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지
              아니한다. 대통령의 임기는 5년으로 하며, 중임할 수 없다. 대통령은
              법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수
              없다. 제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은
              대법원장이 지명하는 자를 임명한다. 국가는 국민 모두의 생산 및
              생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을
              위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를
              과할 수 있다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로
              정한다.
            </ContentsDetail>
          </Contents>
          <ContentsImg />
        </ContentsContainer>
      </TitleContainer>
      <MainContainer>
        <TitleWrapper>의료진 소개</TitleWrapper>
        <ContentsDetail>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ContentsDetail>
        <MainContents>
          <LeftImg />
          <RightInfo>
            <Spot>의료진 직위</Spot>
            <Name>의료진 성함</Name>
            <BlackSpot>전문분야</BlackSpot>
            <div style={{ marginBottom: "20px" }}>
              전문뷴야 전문준야 전분분야
            </div>
            <BlackSpot>이력</BlackSpot>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
          </RightInfo>
        </MainContents>
        <MainContents>
          <LeftInfo>
            <Spot>의료진 직위</Spot>
            <Name>의료진 성함</Name>
            <BlackSpot>전문분야</BlackSpot>
            <div style={{ marginBottom: "30px" }}>
              전문뷴야 전문준야 전분분야
            </div>
            <BlackSpot>이력</BlackSpot>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
          </LeftInfo>
          <RightImg />
        </MainContents>
        <MainContents>
          <LeftImg />
          <RightInfo>
            <Spot>의료진 직위</Spot>
            <Name>의료진 성함</Name>
            <BlackSpot>전문분야</BlackSpot>
            <div style={{ marginBottom: "20px" }}>
              전문뷴야 전문준야 전분분야
            </div>
            <BlackSpot>이력</BlackSpot>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
            <div style={{ marginLeft: "10px" }}>- 이력</div>
          </RightInfo>
        </MainContents>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1260px;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 70px 0;
  height: 437px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  ${theme.typography.title1};
  margin-bottom: 30px;
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Contents = styled.div`
  padding: 0 70px;
  max-width: 50%;
`;

const ContentsTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  height: 55px;
`;

const ContentsDetail = styled.div`
  font-size: 18px;
`;

const ContentsImg = styled.div`
  background-color: gray;
  flex: 1;
  height: 340px;
  min-width: 50%;
`;

const MainContents = styled.div`
  width: 100%;
  display: flex;
  height: 558px;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
`;

const LeftImg = styled.div`
  background-color: gray;
  height: 482px;
  width: 390px;
  margin-left: 120px;
`;

const RightImg = styled.div`
  background-color: gray;
  height: 482px;
  width: 390px;
  margin-right: 120px;
`;

const RightInfo = styled.div`
  height: 482px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex: 1;
  margin-left: 60px;
`;

const LeftInfo = styled.div`
  height: 482px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex: 1;
  margin-right: 60px;
  align-items: end;
`;

const Spot = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: ${theme.palette.primary};
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 30px;
`;

const BlackSpot = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 24px;
`;
