import styled from "styled-components";
import { Layout } from "../../components/Layout";
import MainIMG from "./MainIMG.svg";
import MainBackground from "./MainBackground.svg";
import Banner from "./Banner.svg";
import theme, { response } from "../../styles/theme";
import Map from "./Map.svg";
import { useEffect, useState } from "react";
import MobileMain from "./MobileMain.svg";
import MobileMap from "./MobileMap.svg";
import MobileBanner from "./MobileBanner.svg";
import MobileBackground from "./MobileBackground.svg";

export const Home = () => {
  const style1 = `
    @media only screen and (min-width: 1261px) {
      .mainimg {
        background-image: url(${MainIMG});
      }
      .mainback {
        background-image: url(${MainBackground});
      }
      .banner {
        content: url(${Banner});
      }
      .map {
        content: url(${Map});
      }
    }
    @media only screen and (max-width: 1261px) {
      .mainimg {
        background-image: url(${MobileMain});
      }
      .mainback {
        background-image: url(${MobileBackground});
      }
      .banner {
        content: url(${MobileBanner});
      }
      .map {
        content: url(${MobileMap});
      }
    }`;

  return (
    <Layout>
      <style>{style1}</style>
      <MainImgWrapper className="mainimg" />
      <Container>
        <MainContainer className="mainback">
          <MainTitleWrapper>주요 진료</MainTitleWrapper>
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
          <DetailContentsBox />
        </MainContainer>
        <img className="banner" alt="banner" />
        <InfoContainer>
          <MapWrapper className="map" alt="map" />
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

  @media only screen and (max-width: ${response.desktop}px) {
    width: 280px;
    margin: auto;
  }
`;

const MainImgWrapper = styled.div`
  width: 100vw;
  min-width: 1260px;
  height: 600px;
  background: center / cover no-repeat;
  @media only screen and (max-width: ${response.desktop}px) {
    width: 280px;
    height: 233px;
    background: center / contain no-repeat;
    min-width: auto;
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  background: center / cover no-repeat;
  padding: 20px 30px;
  @media only screen and (max-width: ${response.desktop}px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 20px;
  }
`;

const MainTitleWrapper = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.typography.title1};
  padding: 20px 0;
  @media only screen and (max-width: ${response.desktop}px) {
    grid-column: span 6;
    font-size: 20px;
    padding: 0 0 20px 0;
  }
`;

const DetailContentsBox = styled.div`
  grid-column: span 4;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  background-color: white;
  margin-bottom: 20px;
  @media only screen and (max-width: ${response.desktop}px) {
    grid-column: span 6;
    height: 225px;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);
  column-gap: 24px;
  row-gap: 12px;
  padding: 50px 30px;
  @media only screen and (max-width: ${response.desktop}px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 15px;
    grid-template-rows: none;
  }
`;

const MapWrapper = styled.img`
  width: auto;
  grid-column: span 8;
  grid-row: span 7;
  @media only screen and (max-width: ${response.desktop}px) {
    grid-column: span 6;
  }
`;

const InfoWrapper = styled.div`
  grid-column: 9 / span 4;
  grid-row: span 2;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  @media only screen and (max-width: ${response.desktop}px) {
    grid-column: span 6;
  }
`;
