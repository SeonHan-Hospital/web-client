import styled from "styled-components";
import { Layout } from "../../components/Layout";
import MainIMG from "./MainIMG.svg";
import MainBackground from "./MainBackground.svg";
import Banner from "./Banner.svg";
import theme, { response } from "../../styles/theme";
import Map from "./Map.svg";
import MobileMain from "./MobileMain.svg";
import MobileMap from "./MobileMap.svg";
import MobileBanner from "./MobileBanner.svg";
import MobileBackground from "./MobileBackground.svg";
import { Infos } from "./data";

export const Home = () => {
  const style1 = `
    @media only screen and (min-width: 500px) {
      .mainimg {
        background-image: url(${MainIMG});
      }
      .mainback {
        background-image: url(${MainBackground});
      }
      .banner {
        background-image: url(${Banner});
      }
      .map {
        background-image: url(${Map});
      }
    }
    @media only screen and (max-width: 768px) {
      .banner {
        background-image: url(${MobileBanner});
      }
      .bannerText {
        display: none;
      }
    }
    @media only screen and (max-width: 500px) {
      .mainimg {
        background-image: url(${MobileMain});
      }
      .mainback {
        background-image: url(${MobileBackground});
      }
      .banner {
        background-image: url(${MobileBanner});
      }
      .map {
        background-image: url(${MobileMap});
      }
      .bannerText {
        display: none;
      }
      .mainText {
        display: none;
      }
    }`;

  return (
    <Layout>
      <style>{style1}</style>
      <MainImgWrapper className="mainimg">
        <MainText className="mainText">
          {"선한 사람들이 모여\n따뜻한 진료를 시작합니다."}
        </MainText>
      </MainImgWrapper>
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
        <BannerImg className="banner">
          <BannerText className="bannerText">
            {`제주선한병원은 우수한 의료진의 수준 높은 의료서비스를 바탕으로\n암 재활 및 중추신경계 재활, 수술 후 회복기 재활에 최선을 다하고 있습니다.\n특히, 암 재활은 암 재발 및 전이를 억제하고 항암 및 방사선 치료의 부작용을 덜어주면서\n면역력을 극대화 할 수 있는 통합적인 지지체계 프로그램으로 운영되고 있습니다.`}
          </BannerText>
        </BannerImg>
        <InfoContainer>
          <MapWrapper className="map" />
          {Infos.map((el, index) => (
            <InfoWrapper
              size={el.row}
              key={index}
              minHeight={el.minHeight && el.minHeight}
            >
              <InfoTitleWrapper>
                {el.icon.map((inner, idx) => (
                  <div key={idx} style={{ display: "flex" }}>
                    <Icon src={inner} />
                    <div style={{ marginRight: 20 }}>{el.label[idx]}</div>
                    <br className="867" />
                  </div>
                ))}
              </InfoTitleWrapper>
              {el.content.map((inner, idx) => (
                <InfoContentWrapper key={idx}>{inner}</InfoContentWrapper>
              ))}
            </InfoWrapper>
          ))}
        </InfoContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  max-width: 1260px;
  margin: auto;

  @media only screen and (max-width: ${response.mobile}px) {
    min-width: 280px;
    margin: auto;
  }
`;

const MainImgWrapper = styled.div`
  width: 100vw;
  /* min-width: 1260px; */
  height: 600px;
  background: center / cover no-repeat;
  display: flex;
  justify-content: start;
  align-items: end;
  @media only screen and (max-width: ${response.mobile}px) {
    height: 233px;
  }
`;

const MainText = styled.div`
  color: white;
  font-size: 45px;
  font-weight: 500;
  white-space: pre;
  margin: 100px 5%;
  max-width: 498px;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  background: center / cover no-repeat;
  padding: 20px 30px;
  @media only screen and (max-width: ${response.mobile}px) {
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
  @media only screen and (max-width: ${response.mobile}px) {
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
  @media only screen and (max-width: ${response.pad}px) {
    grid-column: span 6;
    height: 225px;
  }
`;

const BannerImg = styled.div`
  max-width: 1260px;
  width: 100%;
  height: 400px;
  background: center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${response.pad}px) {
    height: 450px;
  }
  @media only screen and (max-width: ${response.mobile}px) {
    height: 300px;
  }
`;

const BannerText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  white-space: pre;
  text-align: center;
  display: block;
  word-break: break-all;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  height: 600px;
  padding: 50px 30px;
  @media only screen and (max-width: ${response.pad}px) {
    height: 900px;
    grid-template-rows: repeat(15, 1fr);
  }
  @media only screen and (max-width: ${response.mobile}px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 15px;
    height: 900px;
  }
`;

const MapWrapper = styled.div`
  grid-column: span 8;
  background: center / cover no-repeat;
  grid-row: span 7;
  height: 570px;
  @media only screen and (max-width: ${response.pad}px) {
    grid-column: span 12;
    height: 250px;
    grid-row: span 4;
  }
  @media only screen and (max-width: ${response.mobile}px) {
    grid-column: span 6;
    height: 250px;
    grid-row: span 4;
  }
`;

const InfoWrapper = styled.div<{ size: number; minHeight?: number }>`
  grid-column: 9 / span 4;
  grid-row: span ${(props) => props.size};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 255px;
  max-height: 180px;
  min-height: 150px;
  ${(props) => props.minHeight && `min-Height: ${props.minHeight}px;`}
  @media only screen and (max-width: ${response.pad}px) {
    grid-column: span 12;
    grid-row: span ${(props) => props.size + 1};
  }
  @media only screen and (max-width: ${response.mobile}px) {
    grid-column: span 6;
  }
`;

const InfoTitleWrapper = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  margin-bottom: 17px;
  width: 90%;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 10px 0 0;
`;

const InfoContentWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 5px 0;
  width: 90%;
  display: block;
  word-break: break-all;
`;
