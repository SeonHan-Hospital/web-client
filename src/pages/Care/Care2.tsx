import styled from "styled-components";
import theme from "../../styles/theme";

export const Care2 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>작업치료</Title>
      <Subtitle style={{ fontWeight: "bold", marginBottom: "10px" }}>
        치료 대상
      </Subtitle>
      <Subtitle
        style={{ maxWidth: "500px", fontSize: "16px" }}
      >{`뇌졸중, 외상성 뇌손상, 뇌,종양 등의 병변으로 인해 중추신경이 손상된 경우, 인지장애, 연하곤란 장애`}</Subtitle>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care2_1.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>특수·복합 작업치료</ContentsTitle>
          <TextContents>
            복합, 특수작업치료는 질병이나 사고로 인해서 신체적, 정신적으로
            손상을 받은 환자에게 능동적이고, 목적있는 활동을 제공하여 의미있고,
            유용한 작업을 수행하도록 합니다. 환자분들의 삶이 질적으로 향상되기
            위해 다양한 환경속에서 육체적, 인지적, 심리사회적 문제를 다루며
            가정과 학교, 직장, 지역사회 등의 환경과 역할에 참여하여 행복한 삶을
            영위할 수 있도록 돕는 치료입니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
      <Subtitle style={{ textAlign: "left", maxWidth: "1000px" }}>
        질병이나 사고로 인해서 신체적, 정신적으로 손상을 받은 환자들에게
        능동적이고, 목적있는 활동을 제공하며 의미있고, 유용한 작업을 수행하도록
        합니다. 환자분들의 삶이 질적으로 향상되기 위해 다양한 상황 속에서
        육체적, 인지적, 심리사회적 문제를 다루며 가정과 학교, 직장, 지역 사회
        등의 환경과 역할에 참여하여 행복한 삶의 영위할 수 있도록 돕는
        치료입니다.
      </Subtitle>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>일상생활동작치료</ContentsTitle>
          <TextContents>
            생활 속에서 필요한 기본적 활동들부터 건강관리, 지역사회 기술에
            이르기까지 하루생활속에 일어나는 모든 활동의 훈련을 말합니다.
            독립성을 향상시키기 위한 평가와 함께 필요한 동작을 반복교육하고
            훈련시킴으로써 삶의 질을 높이고 독립적인 일상생활을 영위 할 수
            있도록 치료프로그램을 구성하고 있습니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care2_2.svg`} alt="img" />
      </TextImgContainer>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care2_3.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>연하장애재활치료</ContentsTitle>
          <TextContents>
            연하란 먹기와 삼키는 과정으로 인간이 살아가는데 있어 매우 중요한
            기능입니다. 연하곤란이란 보통 사람에 비하여 음식물을 삼키는데 많은
            시간이 걸릴 뿐만 아니라 음식물의 일부가 식도가 아닌 기도로 들어가게
            되어 폐렴을 일으키는 등 합병증 유발에 위험이 있는 질환입니다.
            연하치료를 통해 먹는 기능을 향상시킨다는 것은 기능적인 장애를
            치료한다는 개념을 넘어 넓은 의미에서 삶을 치료한다는 의미를 가질 수
            있습니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>연하재활 기능적전기자극치료</ContentsTitle>
          <TextContents>
            연하재활 기능적전기자극치료는 3개월마다 실시한 연하장애 평가 검사​
            (비디오 조영 연하 검사 또는 내시경 연하검사)에서 Penetration
            Aspiration Scale(PAS)가 5 이상인 경우 인정하며 (발병 또는 수술 후
            6개월까지는 PAS 3이상인 경우 인정함) 발병 또는 수술 후 2년이 경과한
            이후에는 인정하지 아니합니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care2_4.svg`} alt="img" />
      </TextImgContainer>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care2_5.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>전산화 인지재활치료</ContentsTitle>
          <TextContents>
            표준화된 평가도구를 통해 각 인지 영역별로 문제가 되는 영역을
            판별하고 컴퓨터를 이용한 전산화 인지재활을 통해 영역별로 세분화된
            치료프로그램과 각 신체별 운동 학습에도 도움을 주는 프로그램도 별도로
            제공하여, 인지향상과 함께 운동능력 향상에도 도움을 주고 있습니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-left: 5%;
  }
`;

const Title = styled.div`
  width: 100%;
  margin-top: 70px;
  height: 72px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  ${theme.typography.title1};

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  font-size: 18px;
  margin-bottom: 80px;
`;

const TextImgContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: space-between;
  margin-bottom: 80px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const TextImgContainerReverse = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: space-between;
  margin-bottom: 80px;

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    margin-bottom: 40px;
  }
`;

const BigImg = styled.img`
  width: 50%;
  max-width: 540px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  max-width: 540px;
  padding: 20px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 40px;
    padding: 0;
  }
`;

const ContentsTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

const TextContents = styled.div`
  width: 100%;
  max-width: 470px;
  font-size: 18px;
  margin-right: 40px;
`;
