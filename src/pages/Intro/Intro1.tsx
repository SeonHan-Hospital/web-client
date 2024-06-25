import styled from "styled-components";
import theme from "../../styles/theme";
import intro1_1 from "./intro1_1.svg";

export const Intro1 = () => {
  return (
    <Container>
      <Title>인사말</Title>
      <SubTitle>{`청천벽력 같은 순간이셨지요?\n앞으로 어찌 될 건지 두렵고 막막하셨지요?`}</SubTitle>
      <Text>{`저도 위암 진단을 받았을 때 그랬습니다. 저의 아내가 유방암 진단 받고 절제술 받았을 때도 그랬습니다.\n매일 진료실에서 환자보고 수술하는 의사인 저도 암을 피해 갈 수는 없었습니다. 그러는 중에 작아 보이는 것이 결코 작은 일이 아니라는 생각들이 커졌습니다.\n숲 속의 공기와 맑은 물, 유기농으로 키운 식재료로 조리한 건강한 밥상, 차가운 병실이 아닌 내 집 같이 편안한 잠자리, 느긋하게 음악 들으며 마시는 차 한잔, 가벼운 운동하고, 아로마 향으로 기분 전환도 하고… 창 밖으로 한라산이 보이고 아래로는 푸른빛 제주 바다가 펼쳐집니다.\n\n바로 제주선한병원 입니다.\n사려니 숲길, 한라 생태숲, 절물 자연휴양림, 교래 휴양림이 20분 거리에 있습니다. 검은 모래 삼양해수욕장과 하얀 백사장의 함덕 해수욕장, 용암 해수사우나도 30분 거리에 있습니다. 저희 제주선한병원 식구들은 환우 여러분들을 가족으로 모실 수 있도록 마음을 다 할 것입니다. 암을 앓았던 의사로서 환우 여러분의 친구로서 함께 하겠습니다.\n\n치유의 섬 제주로 오십시오!\n당신의 삶에 동반자가 되겠습니다.`}</Text>
      <Img src={intro1_1} alt="병원전경" />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    width: 90%;
    margin-left: 5%;
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
    margin: 40px 0%;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  max-width: 1090px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  white-space: pre-wrap;
`;

const Text = styled.div`
  width: 100%;
  max-width: 1090px;
  font-size: 18px;
  white-space: pre-wrap;
  width: 100%;
  margin-bottom: 80px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 70px;
`;
