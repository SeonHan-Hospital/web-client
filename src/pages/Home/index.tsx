import styled from "styled-components";
import { Layout } from "../../components/Layout";
import MainIMG from "./MainIMG.svg";
import MainBackground from "./MainBackground.svg";
import Banner from "./Banner.svg";
import theme from "../../styles/theme";
import Map from "./Map.svg";

export const Home = () => {
  return (
    <Layout>
      <MainImgWrapper style={{ backgroundImage: `url(${MainIMG})` }} />
      <Container>
        <MainContainer style={{ backgroundImage: `url(${MainBackground})` }}>
          <MainTitleWrapper>주요 진료</MainTitleWrapper>
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
        </MainContainer>
        <img src={Banner} alt="banner" />
        <InfoContainer>
          <MapWrapper src={Map} />
          <InfoWrapper />
          <InfoWrapper />
          <InfoWrapper />
        </InfoContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 1260px;
  margin: auto;
`;

const MainImgWrapper = styled.div`
  width: 100vw;
  min-width: 1260px;
  height: 600px;
  background: center / cover no-repeat;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  background: center / cover no-repeat;
  padding: 20px 30px;
`;

const MainTitleWrapper = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.typography.title1};
  padding: 20px 0;
`;

const DetailContentsBox = styled.div`
  grid-column: span 4;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  background-color: white;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);
  column-gap: 24px;
  row-gap: 12px;
  padding: 50px 30px;
`;

const MapWrapper = styled.img`
  width: auto;
  grid-column: span 8;
  grid-row: span 7;
`;

const InfoWrapper = styled.div`
  grid-column: 9 / span 4;
  grid-row: span 2;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;
