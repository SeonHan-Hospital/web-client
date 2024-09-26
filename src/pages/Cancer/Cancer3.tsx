import styled from "styled-components";
import theme from "../../styles/theme";
import cancer3_2 from "./cancer3_2.png";

export const Cancer3 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>암치료기 [RAPHAGO PREMIUM] 고주파 온열 암 치료기</Title>
      <Subtitle>{`온열암치료는 암조직에 열을 가하여 암세포의 생체 대사율을 증가시키면서 \n산소의 공급을 막음으로써 증식을 억제하여 암세포의 자살을 유도,\n서서히 파괴하는 치료법입니다.`}</Subtitle>
      <TextImgContainerReverse>
        <ContentsContainer>
          <ContentsTitle>고주파 온열 암치료기 효과</ContentsTitle>
          <TextContents>
            고주파 온열 암 치료기는 13.56MHz의 고주파 에너지를 이용하여, 신체
            내부의 깊은 부위에 위치한 종양 조직을 선택적으로 가열하는
            방식입니다. 이 치료는 정상 세포에는 거의 영향을 미치지 않으며, 암
            세포의 온도를 42℃ 이상으로 상승시켜 종양 세포의 증식을 억제하고
            괴사시키는 효과가 있습니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={cancer3_2} alt="img" />
      </TextImgContainerReverse>
      <BorderLine />
      <Title>전신 온열치료</Title>
      <Subtitle>{`암환자는 정상인에 비해서 체온이 낮고 항암제와 방사선 치료의 공격적인 치료로 인해 \n혈관세포가 파괴되어 혈류량과 대사량이 감소됩니다. \n그래서 암환자의 심부온도를 39~40도까지 상승시키기 위한 전신 온열치료가 필요합니다.`}</Subtitle>
      <TextImgContainer>
        <BigImg src={`${IMGURL}cancer3_1.svg`} alt="img" />
        <ContentsContainer>
          <ContentsTitle>전신 온열치료 효과</ContentsTitle>
          <TextContents>
            암치료에 있어 온열치료의 병행은 혈액순환을 촉진시켜 세포내 영양소와
            산소를 공급하고 항암제와 생물학적 제제의 암세포 내 유입량을 늘려
            직접적인 암세포 파괴를 유도합니다.
          </TextContents>
        </ContentsContainer>
      </TextImgContainer>
      <BorderLine />
      <Title>고주파 온열치료</Title>
      <Subtitle>{`고주파 온열치료는 인체 세포에 고주파 교류 전류를 보내면 세포들은 이에 반응하여 분자운동으로 인체\n스스로 열을 만들어 내어 체온을 상승시키는 치료법으로 통증이 거의 없으며\n안정적으로 심부열을 상승시켜 암치료에 보조적으로 사용하는 방식입니다.`}</Subtitle>
      <TextImgContainerReverse>
        <ContentsContainer>
          <ContentsTitle>고주파 온열치료 효과</ContentsTitle>
          <TextContents>
            고주파로 강한 심부열을 발생시켜 인체 깊은 곳의 온도를 상승시켜
            암세포 주변으로 집중적으로 전달되어 종양세포의 혈류흐름과 에너지
            대사를 차단하며 암세포의 괴사를 유도해 암치료에 보조적으로 사용되고
            있습니다.
          </TextContents>
        </ContentsContainer>
        <BigImg src={`${IMGURL}cancer3_2.svg`} alt="img" />
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

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  margin-top: 80px;
`;
