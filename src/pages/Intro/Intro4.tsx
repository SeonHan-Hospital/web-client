import styled from "styled-components";
import theme from "../../styles/theme";

export const Intro4 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <Title>프로그램</Title>
      <SubTitle>숲 체험</SubTitle>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro4_1.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro4_2.jpg`} alt="intro" />
      </ImgContainer>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro4_3.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro4_4.jpg`} alt="intro" />
      </ImgContainer>
      <ImgContainer>
        <Img src={`${IMGURL}intro4_5.jpg`} alt="intro" />
        <Img src={`${IMGURL}intro4_6.jpg`} alt="intro" />
        <Img src={`${IMGURL}intro4_7.jpg`} alt="intro" />
      </ImgContainer>
      <SubTitle>요가</SubTitle>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro4_8.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro4_9.jpg`} alt="intro" />
      </ImgContainer>
      <SubTitle>티, 공예, 아로마</SubTitle>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro4_10.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro4_11.jpg`} alt="intro" />
      </ImgContainer>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro4_12.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro4_13.jpg`} alt="intro" />
      </ImgContainer>
      <SubTitle>파크골프</SubTitle>
      <ImgContainer>
        <Img2 src={`${IMGURL}intro4_14.jpg`} alt="intro" />
        <Img2 src={`${IMGURL}intro4_15.jpg`} alt="intro" />
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
