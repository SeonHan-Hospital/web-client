import styled from "styled-components";
import theme from "../../styles/theme";

export const Intro2 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>시설 안내</Title>
      <SubTitle>면역병동</SubTitle>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro31.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro32.jpg`} alt="intro" />
      </ImgContainer>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro33.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro34.jpg`} alt="intro" />
      </ImgContainer>
      <ImgContainer>
        <Img src={`${IMGURL}intro35.jpg`} alt="intro" />
        <Img src={`${IMGURL}intro36.jpg`} alt="intro" />
        <Img src={`${IMGURL}intro37.jpg`} alt="intro" />
      </ImgContainer>
      <SubTitle>면역치료센터</SubTitle>
      <ImgContainer>
        <Img src={`${IMGURL}intro3_2.svg`} alt="intro" />
        <Img src={`${IMGURL}intro38.jpg`} alt="intro" />
        <Img src={`${IMGURL}intro39.jpg`} alt="intro" />
      </ImgContainer>
      <SubTitle>재활치료센터</SubTitle>
      <ImgContainer>
        <Img2
          src={`${IMGURL}intro40.jpg`}
          alt="intro"
          style={{ maxHeight: "300px" }}
        />
        <Img2 src={`${IMGURL}intro3_5.svg`} alt="intro" />
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
  max-height: 250px;
  object-fit: cover;
  margin-top: 40px;
`;

const Img2 = styled(Img)`
  max-height: 400px;
  max-width: 600px;
`;
