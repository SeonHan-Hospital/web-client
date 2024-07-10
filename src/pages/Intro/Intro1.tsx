import styled from "styled-components";
import theme from "../../styles/theme";

export const Intro1 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>인사말</Title>
      {/* <SubTitle>{`청천벽력 같은 순간이셨지요?\n앞으로 어찌 될 건지 두렵고 막막하셨지요?`}</SubTitle> */}
      <Text>{`평생 진료실에서 환자 보고 있던 의사인 저도 암 환자가 되었습니다.\n당연히 공포에서 벗어나 명의에게 맡겨 수술과 항암 치료로 새로운 삶을 살아가고자 하는 간절한 마음뿐이었습니다.\n\n치료 못지않게 치유의 프로그램과 공간이 절실함을 깨달았습니다.\n문제는 면역력 증강에 해답이 있습니다.\n국내 최초로 도입한 음이온 용암숲 공기 병실, 메디 푸드의 치유식, 요가, 파크골프, 아로마치료, 림프 마사지, 헬스기구, 한지공예, 허브 텃밭, 숲 치유까지 다양한 시설과 프로그램을 준비 했습니다.\n\n창밖으로 한라산이 보이고 아래론 푸른빛 제주 바다가 펼쳐집니다.\n바로 치유의 섬! 제주 선한 병원입니다.\n있어서는 안될 응급상황엔 200M 거리에 국립 제주대학병원이 있습니다.\n\n사려니 숲, 한라 생태 숲, 절물 휴양림, 삼다수 숲, 교래 휴양림이 20분 거리에 있고, 하얀 백사장의 푸른빛 함덕 바다와 김녕 바다 용암 해수 사우나도 30분 거리 안에 있습니다.\n\n치유를 원하시는 간절한 눈빛을 기억합니다!\n당신은 참 귀한 사람입니다.\n반드시. 승리해서. 가족의 품으로 돌아가야 합니다.\n숨! 쉼! 치유의 손길로 환우 여러분과 선한 동행이 되겠습니다.`}</Text>
      <Img src={`${IMGURL}intro1_1.svg`} alt="병원전경" />
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
