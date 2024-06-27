import styled from "styled-components";
import theme from "../../styles/theme";

export const Care3 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>통증치료</Title>
      <Subtitle style={{ fontWeight: "bold", marginBottom: "10px" }}>
        치료 대상
      </Subtitle>
      <Subtitle
        style={{ maxWidth: "500px", fontSize: "16px" }}
      >{`신경계 손상환자, 외상성 신경손상, 디스크, 스트레스성 신경마비, 수핵 탈출증, 척추 전방 전위증, 오십견, 거북목, 어깨결림 급성 / 만성 관절염, 근육통, 염좌 및 골절환자, 퇴행성 관절염 / 암 통증`}</Subtitle>
      <MainIMG src={`${IMGURL}care3_1.svg`} alt="img" />
      <Subtitle
        style={{ textAlign: "left", maxWidth: "1000px", marginTop: "40px" }}
      >
        온열 및 한냉 치료, 광선, 전기치료 등의 물리적 요소를 유효, 적절히
        활용하여 손상에 의해 발생된 인체의 불안정한 상태의 환자에게 적용함으로써
        고통의 감소나 염증 및 근경련의 완화, 근 재교육 등으로 통증을 완화시키고
        손실된 기능을 최대한 증진시켜 정상적인 사회활동에 도움을 드리고
        있습니다.
      </Subtitle>
      <Title>치료기기</Title>
      <ImgContainer>
        <ImgDetail>
          <img
            src={`${IMGURL}care3_2.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>온열 및 냉치료</DetailTitle>
        </ImgDetail>
        <ImgDetail>
          <img
            src={`${IMGURL}care3_3.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle style={{ marginBottom: "0" }}>전기치료</DetailTitle>
          <div>간섭파치료, 경피신경자극치료</div>
        </ImgDetail>
        <ImgDetail>
          <img
            src={`${IMGURL}care3_4.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>레이저치료</DetailTitle>
        </ImgDetail>
        <ImgDetail>
          <img
            src={`${IMGURL}care3_5.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>극초단파치료</DetailTitle>
        </ImgDetail>
        <ImgDetail>
          <img
            src={`${IMGURL}care3_6.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>견인치료(경추, 요추)</DetailTitle>
        </ImgDetail>
        <ImgDetail>
          <img
            src={`${IMGURL}care3_7.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>CPM(어깨, 무릎)</DetailTitle>
        </ImgDetail>
      </ImgContainer>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>도수치료</ContentsTitle>
          <TextContents>
            환자의 통증의 감소와 기능 개선을 위해 물리치료사가 수기(손)을 이용해
            정형도수기법, 근막이완술, 근에너지기법, 치료적마사지 등을 이용하여
            치료를 접근합니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care3_8.svg`} alt="img" />
      </TextImgContainer>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care3_9.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>슬링시스템</ContentsTitle>
          <TextContents>
            흔들리는 줄을 이용하여 재활에 도움을 줍니다. 근신경계를 활성화
            시키는데 큰 도움이 됩니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>충격파치료</ContentsTitle>
          <TextContents>
            체외충격파(shock wave)는 '음속보다 빠르게 몸속으로 전달되는 압력
            파동'을 의미합니다. 이를 사용하여 물리치료나 약물치료 등의
            방법으로는 큰 효과를 보지 못하는 만성 근골격계 질환을 치료하는
            비수술적 치료 방법을 체외충격파 치료라고 합니다. 체외에서 충격파를
            병변 부위에 가하여 혈관을 재형성을 돕고 힘줄과 그 주변조직인 신경의
            세포막에 물리적 변화를 일으켜 통증의 인지를 억제시키고 기능을
            개선하는 매우 효과적인 치료 방법입니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care3_10.svg`} alt="img" />
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

const MainIMG = styled.img`
  width: 100%;
  max-width: 995px;
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

const ImgContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 80px;
`;

const ImgDetail = styled.div`
  display: flex;
  grid-column: span 4;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  @media only screen and (max-width: 1200px) {
    grid-column: span 6;
  }
  @media only screen and (max-width: 890px) {
    grid-column: span 12;
  }
`;

const DetailTitle = styled.div`
  margin: 30px 0;
  font-size: 20px;
  font-weight: bold;
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
    margin-left: 0;
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
