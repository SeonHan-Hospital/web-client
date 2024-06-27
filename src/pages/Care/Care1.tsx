import styled from "styled-components";
import theme from "../../styles/theme";

export const Care1 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>신경계 재활치료</Title>
      <Subtitle style={{ fontWeight: "bold", marginBottom: "10px" }}>
        치료 대상
      </Subtitle>
      <Subtitle
        style={{ maxWidth: "500px", fontSize: "16px" }}
      >{`신경계 손상환자, 외상성 신경손상, 디스크, 스트레스성 신경마비, 수핵 탈출증, 척추 전방 전위증, 오십견, 거북목, 어깨결림 급성 / 만성 관절염, 근육통, 염좌 및 골절환자, 퇴행성 관절염 / 암 통증`}</Subtitle>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care1_1.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>중추신경계 발달치료</ContentsTitle>
          <TextContents>
            신경계 운동치료실은 보바스 치료, PNF, 중추신경계 발달치료 등
            전문적인 교육과정을 120시간 이상 이수한 물리치료사가 환자와 1대1로
            집중적인 운동을 시행합니다. 먼저 체계화된 평가 도구로 환자를
            평가하고 환자의 기능수준에 맞는 목표를 설정한 후 목표에 맞는 운동을
            하게 되며 주기적인 재평가로 그동안의 치료과정을 수정·보완합니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
      <Subtitle style={{ textAlign: "left", maxWidth: "1000px" }}>
        온열 및 한냉 치료, 광선, 전기치료 등의 물리적 요소를 유효, 적절히
        활용하여 손상에 의해 발생된 인체의 불안정한 상태의 환자에게 적용함으로써
        고통의 감소나 염증 및 근경련의 완화, 근 재교육 등으로 통증을 완화시키고
        손실된 기능을 최대한 증진시켜 정상적인 사회활동에 도움을 드리고
        있습니다.
      </Subtitle>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>보행훈련(Gait Training)</ContentsTitle>
          <TextContents>
            중추신경계 및 근골격계 손상으로 인한 신체앉정성 부족, 근육의 마비,
            협응 능력의 상실에 의해 비정상적인 보행패턴을 가진 환자들에게
            효율적인 보행패턴을 반복 훈련시켜 기능적이고 효과적인 보행을 유지 및
            개선해 나갑니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care1_2.svg`} alt="img" />
      </TextImgContainer>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care1_3.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>매트 및 이동훈련(Mat Program)</ContentsTitle>
          <TextContents>
            서거나 보행을 하기 위한 매트에서 이루어지는 기본적인 활동훈련으로,
            근력 및 기능적 관절가동범위를 향상시키고, 돌아눕기, 일어나 앉기,
            균형잡기, 옮겨 앉기, 보행에 대한 준비 등의 훈련과 운동학습을 통하여
            "점진적"으로 안정성 및 신체 균형능력을 촉진시켜 정상적인 보행을 위한
            기초를 다집니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>기능적전기자극치료(FES)</ContentsTitle>
          <TextContents>
            중추신경계, 근골격계 질환으로 약화된 근육의 경직을 예방하고, 근력을
            강화시켜 견관절 및 기타 관절의 아탈구를 방지하고 상지 기능을
            향상시키며, 보행 시 발이 바닥에 끌리지 않도록 하여 보다 효율적인
            보행이 가능하도록 치료합니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care1_4.svg`} alt="img" />
      </TextImgContainer>
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
