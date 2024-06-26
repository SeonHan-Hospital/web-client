import styled from "styled-components";
import theme from "../../styles/theme";

export const Cancer2 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>암성통증치료</Title>
      <Subtitle>
        암성, 신경성 통증 신호를 무통증 신호로 전환하여 치료해 부작용이 거의
        없고 즉각적인 치료효과가 있습니다.
      </Subtitle>
      <TextImgContainer>
        <BackImg src={`${IMGURL}cancer2_1.svg`} alt="img" />
        <FrontTextBox>
          <FrontTitle>페인닥터(Pain Doctor)</FrontTitle>
          <FrontText>
            통증부위에 부착된 전극 패드를 통해 신경자극 수용체에 전달된 신호가
            통증 교란 신호로 작용하여 통증의 정보를 교란시키는 비침습적 무통증
            신호요법입니다.
          </FrontText>
          <FrontSubTitle>{`비침습적\n무통증 신호요법`}</FrontSubTitle>
          <FrontSubTitle>{`가장 효과적인 파장대\n630~370mm`}</FrontSubTitle>
          <FrontSubTitle>{`놀라운 \n통증감소 효과`}</FrontSubTitle>
          <FrontSubTitle>{`부작용 적은\n안전한 치료`}</FrontSubTitle>
          <FrontSubTitle>{`최신형 \nPAD/CUP`}</FrontSubTitle>
        </FrontTextBox>
      </TextImgContainer>
      <BorderLine />
      <BottomTextImgContainer>
        <ContentsContainer>
          <ContentsTitle>림프도수치료</ContentsTitle>
          <TextContents>
            {`림프부종은 우리 몸의 림프액 수송의 기능적 결함으로 피부와 피하 조직에 과량의 수분과 단백질(림프액)이 축적되어 팔 또는 다리의 부피가 비정상적으로 늘어나 있는 상태를 말합니다.\n암 치료를 위한 림프절 절제술과 방사선 치료 또는 감염 등으로 림프계가 손상되거나 선천적으로 림프관 발달이 부적절한 경우 등이 원인으로 알려져 있습니다.\n림프 부종이 발생하면 손, 발, 팔, 다리의 부종, 무거운 느낌, 피부 변화, 누르면 피부가 들어가는 등의 증상이 생길 수 있습니다. `}
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}cancer2_2.svg`} alt="img" />
      </BottomTextImgContainer>
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

const TextImgContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  /* justify-content: space-between; */
  margin-bottom: 80px;
  position: relative;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    position: static;
    align-items: center;
  }
`;

const Subtitle = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  font-size: 18px;
  margin-bottom: 80px;
`;

const BackImg = styled.img`
  width: 540px;
  z-index: -1;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const FrontTextBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  width: 794px;
  left: 306px;

  @media only screen and (max-width: 1100px) {
    width: 90%;
    position: static;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

const FrontTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  grid-column: span 3;

  @media only screen and (max-width: 700px) {
    grid-column: span 2;
    margin-top: 40px;
  }
`;

const FrontText = styled.div`
  font-size: 18px;
  margin: 10px;
  grid-column: span 3;

  @media only screen and (max-width: 700px) {
    grid-column: span 2;
  }
`;

const FrontSubTitle = styled.div`
  grid-column: span 1;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  white-space: pre;
  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const BottomTextImgContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: space-between;
  margin: 80px 0;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BigImg = styled.img`
  width: 50%;
  max-width: 540px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  max-width: 540px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-bottom: 40px;
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

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  margin-top: 80px;
`;
