import styled from "styled-components";
import theme from "../../styles/theme";
import intro3_1 from "./intro3_1.svg";
import intro3_2 from "./intro3_2.svg";
import intro3_3 from "./intro3_3.svg";
import intro3_4 from "./intro3_4.svg";
import intro3_5 from "./intro3_5.svg";
import intro3_6 from "./intro3_6.svg";
import intro3_7 from "./intro3_7.svg";
import intro3_8 from "./intro3_8.svg";

export const Intro2 = () => {
  return (
    <Container>
      <Title>시설 안내</Title>
      <SubTitle>면역치료센터</SubTitle>
      <ImgContainer>
        <Img src={intro3_1} alt="intro" />
        <Img src={intro3_2} alt="intro" />
        <Img src={intro3_3} alt="intro" />
      </ImgContainer>
      <SubTitle>재활치료센터</SubTitle>
      <ImgContainer>
        <Img src={intro3_4} alt="intro" style={{ maxWidth: "600px" }} />
        <Img src={intro3_5} alt="intro" style={{ maxWidth: "600px" }} />
      </ImgContainer>
      <SubTitle>면역병동</SubTitle>
      <ImgContainer>
        <Img src={intro3_8} alt="intro" />
        <Img src={intro3_7} alt="intro" />
        <Img src={intro3_6} alt="intro" />
      </ImgContainer>
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
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  white-space: pre-wrap;
  color: #1467b0;
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 387px;
  margin-bottom: 60px;
  margin-top: 40px;
`;
