import styled from "styled-components";
import theme from "../../styles/theme";

export const Care4 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>면역치료</Title>
      <Subtitle
        style={{ maxWidth: "500px", fontSize: "16px" }}
      >{`면역세포를 활성화하여 종양세포의 자연사멸을 유도하고 전이와 재발을 방지하며 정상세포의 재생을 활성화시켜 항암, 방사선 치료율을 높이고 부작용을 감소시킵니다.`}</Subtitle>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>고주파 온열암 치료</ContentsTitle>
          <TextContents>
            {`인체 세포에 고주파 교류 전류를 보내면 세포들은 이에 반응하여 분자운동으로 인체 스스로 열을 만들어 내어 체온을 상승시키는 치료법입니다.\n\n고주파로 강한 심부열을 발생시켜 인체 깊은 곳의 온도를 상승시켜 암세포 주변으로 집중적으로 전달되어 종양세포의 혈류흐름과 에너지 대사를 차단하여 암세포의 괴사를 유도하는 방식으로 암치료에 보조적으로 사용되고 있습니다.`}
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care4_1.svg`} alt="img" />
      </TextImgContainer>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care4_2.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>미슬토</ContentsTitle>
          <TextContents>
            {`항암효과가 입증된 여러 종류의 숙주나무에 기생하는 식물의 추출물인 미슬토는 면역 조절과 암 세포 성장을 억제합니다.\n\n인체의 면역반응을 정상화시켜 암세포 증식을 억제하고 항암치료의 주요 성분인 렉틴과 비스코톡신에 의한 세포독성 효과로 암세포를 파괴합니다.`}
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>싸이모신알파원</ContentsTitle>
          <TextContents>
            {`면역인자를 투여하여 인체가 자연적으로 가지고 있는 자가면역 능력을 회복하고 증가시켜 항암효과를 얻도록 도와줍니다.\n\n암세포를 인식할 수 있는 표면 항원물질 발현을 증가시켜 암세포 복제를 저해하고, T세포, NK세포 등 면역세포 증가 및 활성화를 시켜 면역력을 높여줍니다.`}
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care4_3.svg`} alt="img" />
      </TextImgContainer>
      <TextImgContainerReverse>
        <BigImg src={`${IMGURL}care4_4.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>셀레늄</ContentsTitle>
          <TextContents>
            {`면역계의 기능을 향상시키고 NK세포의 활성화 증가 및 암의 전이 및 재발을 억제해 치료에 도움이 됩니다.\n\n체내에 T세포와 Th세포를 활성시켜 면역력을 증가시키고 항암 및 방사선 치료 전, 후에 셀레늄이 공급되면 부작용이 감소합니다.`}
          </TextContents>
        </ContentsContainer>
      </TextImgContainerReverse>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>글루타치온</ContentsTitle>
          <TextContents>
            {`강력한 항산화 효소로 체내의 독소를 배출되기 쉬운 형태로 전환 시켜 해독작용을 나타내고 간기능을 강화 시킵니다.\n\n글루타치온의 황 화학 그룹이 발암물질에 달라 붙어 체내의 독소를 배출하며 간기능을 강화시키는 효과가 있습니다.`}
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}care4_5.svg`} alt="img" />
      </TextImgContainer>
      <ImgContainer>
        <ImgDetail span={6}>
          <img
            src={`${IMGURL}care4_6.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>리포익산요법</DetailTitle>
        </ImgDetail>
        <ImgDetail span={6}>
          <img
            src={`${IMGURL}care4_7.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>고용량 비타민 주사요법</DetailTitle>
        </ImgDetail>
        <ImgDetail span={6}>
          <img
            src={`${IMGURL}care4_8.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>비타민 D 주사</DetailTitle>
        </ImgDetail>
        <ImgDetail span={6}>
          <img
            src={`${IMGURL}care4_9.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>골다공증 주사</DetailTitle>
        </ImgDetail>
      </ImgContainer>
      <Title>예방접종</Title>
      <ImgContainer>
        <ImgDetail>
          <img
            src={`${IMGURL}care4_10.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>대상포진</DetailTitle>
        </ImgDetail>
        <ImgDetail>
          <img
            src={`${IMGURL}care4_11.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>폐렴</DetailTitle>
        </ImgDetail>
        <ImgDetail>
          <img
            src={`${IMGURL}care4_12.svg`}
            alt="img"
            style={{ width: "100%" }}
          />
          <DetailTitle>독감</DetailTitle>
        </ImgDetail>
      </ImgContainer>
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
  white-space: pre-wrap;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 80px;
`;

const ImgDetail = styled.div<{ span?: number }>`
  display: flex;
  grid-column: span 4;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  ${(props) => props.span && `grid-column: span ${props.span};`}

  @media only screen and (max-width: 1200px) {
    grid-column: span 6;
    ${(props) => props.span && `grid-column: span ${props.span + 6};`}
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
