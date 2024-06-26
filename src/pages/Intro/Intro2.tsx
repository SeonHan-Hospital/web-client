import styled from "styled-components";
import theme from "../../styles/theme";

export const Intro2 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>시설 안내</Title>
      <SubTitle>면역치료센터</SubTitle>
      <ImgContainer>
        <Img src={`${IMGURL}intro3_1.svg`} alt="intro" />
        <Img src={`${IMGURL}intro3_2.svg`} alt="intro" />
        <Img src={`${IMGURL}intro3_3.svg`} alt="intro" />
      </ImgContainer>
      <SubTitle>재활치료센터</SubTitle>
      <ImgContainer>
        <Img
          src={`${IMGURL}intro3_4.svg`}
          alt="intro"
          style={{ maxWidth: "600px" }}
        />
        <Img
          src={`${IMGURL}intro3_5.svg`}
          alt="intro"
          style={{ maxWidth: "600px" }}
        />
      </ImgContainer>
      <SubTitle>면역병동</SubTitle>
      <ImgContainer>
        <Img src={`${IMGURL}intro3_8.svg`} alt="intro" />
        <Img src={`${IMGURL}intro3_7.svg`} alt="intro" />
        <Img src={`${IMGURL}intro3_6.svg`} alt="intro" />
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
