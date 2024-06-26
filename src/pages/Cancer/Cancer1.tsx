import styled from "styled-components";
import theme from "../../styles/theme";

export const Cancer1 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>셀레늄</Title>
      <Subtitle>{`면역활성을 증가시키고 NK 세포의 활성화 증가,\n암의 전이 및 재발을 억제해 치료에 도움이 됩니다. `}</Subtitle>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>셀레늄 효과</ContentsTitle>
          <TextContents>
            체내에 T세포(MLR)와 Th세포(PHA)를 활성시켜 면역력을 증가시키고, 항암
            및 방사선 치료 전, 후에 셀레늄이 공급되면 부작용이 감소합니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}cancer1_1.svg`} alt="1_1" />
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_2.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_3.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_4.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_5.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_6.svg`} alt="img" />
      <BorderLine />
      <Title>싸이모신알파원</Title>
      <Subtitle>{`면역인자를 투여하여 인체가 자연적으로 가지고 있는\n면역능력을 회복하고 증가시켜 항암효과를 얻도록 돕는 치료방법입니다.`}</Subtitle>
      <TextImgContainer>
        <BigImg
          src={`${IMGURL}cancer1_7.svg`}
          alt="1_1"
          style={{ marginRight: "20px" }}
        />
        <ContentsContainer>
          <ContentsTitle>싸이모신알파원 효과</ContentsTitle>
          <TextContents>
            암세포를 인식할 수 있는 표면 항원물질 발현 증가시켜 암세포 복제를
            저해하고, T세포, NK세포 등 면역세포를 증가 및 활성화시켜 면역력을
            높여줍니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_8.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_9.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_10.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_11.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_12.svg`} alt="img" />
      <BorderLine />
      <Title>이뮤노시아닌 (이뮤코텔)</Title>
      <Subtitle>{`무독성의 자연 친화적인 안전한 면역 항암제 구멍 삿갓조개의 혈액내에 있는\n산소운반 단백질인 헤모시아닌을 분리, 정제한 활성 성분`}</Subtitle>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>이뮤노시아닌의 효과</ContentsTitle>
          <TextContents>
            천연면역항암제로 NK 세포 T helper cell, Cytotoxic T cell 활성화,
            면역시스템을 조절하는 IL-2 IL-10 IL-12 등의 분비촉진, 항종양 항체
            생성, 암백신으로 작용(항-KLH 항체생성), 다양한 암의 재발과 악화를
            예방합니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}cancer1_13.svg`} alt="1_1" />
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_14.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_15.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_16.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_17.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_18.svg`} alt="img" />
      <BorderLine />
      <Title>미슬토</Title>
      <Subtitle>{`항암효과가 입증된 여러 종류의 숙주나무에 기생하는\n식물의 추출물인 미슬토는 면역 조절과 암세포 성장을 억제합니다.`}</Subtitle>
      <TextImgContainer>
        <BigImg
          src={`${IMGURL}cancer1_19.svg`}
          alt="1_1"
          style={{ marginRight: "20px" }}
        />
        <ContentsContainer>
          <ContentsTitle>미슬토의 효과</ContentsTitle>
          <TextContents>
            인체의 면역반응을 정상화 시켜 암세포 증식을 억제하고 항암치료의 주요
            성분인 렉틴과 비스코톡신에 의한 세포독성 효과로 암세포를 파괴합니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_20.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_21.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_22.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_23.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_24.svg`} alt="img" />
      <BorderLine />
      <Title>비타민 C</Title>
      <Subtitle>{`우리몸에 필수적인 비타민 C를 주입하는 방법으로\n몸의 항암으로 인한 통증과 부작용 감소에 도움이 됩니다.`}</Subtitle>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>비타민 C 효과</ContentsTitle>
          <TextContents>
            비타민은 몸의 면역기능을 향상 시키며 활성산소 제거해 항산화 작용을
            합니다. 치료 중 발생하는 다양한 부작용을 감소시켜 삶의 질 향상에
            도움이 됩니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}cancer1_25.svg`} alt="1_1" />
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_26.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_27.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_28.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_29.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_30.svg`} alt="img" />
      <BorderLine />
      <Title>리포익산</Title>
      <Subtitle>{`비타민C의 400배로 강한 항산화 작용으로\n활성산소를 줄이고 면역력을 높여 항암치료에 도움이 됩니다.`}</Subtitle>
      <TextImgContainer>
        <BigImg
          src={`${IMGURL}cancer1_31.svg`}
          alt="1_1"
          style={{ marginRight: "20px" }}
        />
        <ContentsContainer>
          <ContentsTitle>리포익산 효과</ContentsTitle>
          <TextContents>
            체내에서 발암의 원인이 될 수 있는 활성산소를 제거하며, 노화, 각종
            질병, 만성 치료, 고지혈증, 체지방 증가를 방지, 체내에 비타민 B, C,
            E와 글루타치온 농도를 올려주는 역할도 합니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_32.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_33.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_34.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_35.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_36.svg`} alt="img" />
      <BorderLine />
      <Title>글루타치온</Title>
      <Subtitle>{`강력 항산화 효소로 체내의 독소를 배출되기 쉬운 형태로\n전환시켜 해독작용을 나타내고, 간기능을 강화 시킵니다.`}</Subtitle>
      <TextImgContainer>
        <ContentsContainer>
          <ContentsTitle>글루타치온 효과</ContentsTitle>
          <TextContents>
            글루타치온의 황 화학 그룹이 발암물질에 달라 붙어 체내의 독소를
            배출하며, 간기능을 강화시키는 효과가 있습니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}cancer1_37.svg`} alt="1_1" />
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_38.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_39.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_40.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_41.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_42.svg`} alt="img" />
      <BorderLine />
      <Title>비타민 D</Title>
      <Subtitle>{`오랜 투병생활과 통증으로 인한 활동 감소로\n비타민 D 부족이 생기게 되는 것을 보충하여 암 증식 및 전이에 효과적입니다.`}</Subtitle>
      <TextImgContainer>
        <BigImg
          src={`${IMGURL}cancer1_43.svg`}
          alt="1_1"
          style={{ marginRight: "20px" }}
        />
        <ContentsContainer>
          <ContentsTitle>비타민 D 효과</ContentsTitle>
          <TextContents>
            활성화 된 비타민 D는 세포를 분화시키고, 암세포가 죽도록 유도하며,
            암으로 인한 통증이나 부작용을 감소시켜 삶의 질을 향상되도록
            도와줍니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainer>
      <ImgContainer>
        <SmallImg src={`${IMGURL}cancer1_44.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_45.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_46.svg`} alt="img" />
        <SmallImg src={`${IMGURL}cancer1_47.svg`} alt="img" />
      </ImgContainer>
      <MobileSmallImg src={`${IMGURL}cancer1_48.svg`} alt="img" />
      <BorderLine />
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
    flex-direction: column-reverse;
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

const MobileSmallImg = styled.img`
  width: 100%;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  max-width: 540px;
  @media only screen and (max-width: 500px) {
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

const ImgContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SmallImg = styled.img`
  width: 100%;
  max-width: 180px;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  margin-top: 80px;
`;
