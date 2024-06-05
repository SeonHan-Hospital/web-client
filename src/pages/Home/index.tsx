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
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";
import img5 from "./img5.svg";
import img6 from "./img6.svg";
import img7 from "./img7.svg";
import img8 from "./img7.svg";
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
        background-image: none;
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
          <DetailTitleWrapper>
            <DetailTitle>재활치료센터</DetailTitle>
          </DetailTitleWrapper>
          <DetailContentsBox>
            <Imgs src={img1} alt="통증치료" />
            <ContentsTitle>통증치료</ContentsTitle>
            <ContentsText>
              고통의 감소나 염증 및 근경련의 완화, 근 재교육 등으로 통증을
              완화시키고 손실된 기능을 최대한 증진시켜 정상적인 사회활동에
              도움을 드리고 있습니다.
            </ContentsText>
          </DetailContentsBox>
          <DetailContentsBox>
            <Imgs src={img2} alt="운동치료" />
            <ContentsTitle>운동치료</ContentsTitle>
            <ContentsText>
              보바스 치료, PNF, 중추 신경계발달치료 등 전문적인 교육과정을
              120시간 이상 이수한 물리치료사가 환자와 1:1로 집중적인 운동을
              시행합니다.
            </ContentsText>
          </DetailContentsBox>
          <DetailContentsBox>
            <Imgs src={img3} alt="작업치료" />
            <ContentsTitle>작업치료</ContentsTitle>
            <ContentsText>
              질병이나 사고로 인해서 신체적, 정신적으로 손상을 받은 환자들에게
              능동적이고, 목적있는 활동을 제공하며 의미있고, 유용한 작업을
              수행하도록 합니다.{" "}
            </ContentsText>
          </DetailContentsBox>
          <DetailContentsBox>
            <Imgs src={img5} alt="도수치료" />
            <ContentsTitle>도수치료</ContentsTitle>
            <ContentsText>
              재활 도수치료사가 진단하여 1:1 맞춤 치료로 인체 구조와 기능적
              이상상태를 바로 잡고 통증을 해소합니다.
            </ContentsText>
          </DetailContentsBox>
          <DetailTitleWrapper>
            <DetailTitle>암면역센터</DetailTitle>
          </DetailTitleWrapper>
          <DetailContentsBox>
            <Imgs src={img7} alt="온열치료" />
            <ContentsTitle>온열치료</ContentsTitle>
            <ContentsText>
              종양 조직에 고온의 열을 가하여 종양세포를 과사시키게 하는
              치료입니다.
            </ContentsText>
          </DetailContentsBox>
          <DetailContentsBox>
            <Imgs src={img4} alt="면역치료" />
            <ContentsTitle>면역치료</ContentsTitle>
            <ContentsText>
              면역활성을 증가 시키고, 암의 전이 및 재발을 억제해 항암치료에
              도움이 됩니다.
            </ContentsText>
          </DetailContentsBox>
          <DetailContentsBox>
            <Imgs src={img6} alt="페인닥터" />
            <ContentsTitle>페인닥터</ContentsTitle>
            <ContentsText>
              신경자극 수용체에 전달된 신호가 통증 교란 신호로 작용하여 통증의
              정보를 교란시키는 비침습적 무통증 신호요법입니다.
            </ContentsText>
          </DetailContentsBox>
          <DetailContentsBox>
            <Imgs src={img8} alt="림프도수치료" />
            <ContentsTitle>림프도수치료</ContentsTitle>
            <ContentsText>
              치료사의 손을 이용하여 림프의 이동을 촉진시켜 림프 순환으로 부종을
              해결합니다.
            </ContentsText>
          </DetailContentsBox>
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Imgs = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
  height: 282px;
  object-fit: cover;

  @media only screen and (max-width: 500px) {
    height: 240px;
  }
`;

const ContentsTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 55px;
  color: ${theme.palette.primaryLight};
  font-weight: bold;
  font-size: 20px;
`;

const ContentsText = styled.div`
  margin: 0 20px;
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
  margin-top: 80px;
  @media only screen and (max-width: ${response.mobile}px) {
    grid-column: span 6;
    font-size: 20px;
    margin-top: 40px;
  }
`;

const DetailTitleWrapper = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 50px;
  @media only screen and (max-width: ${response.mobile}px) {
    grid-column: span 6;
    margin-top: 40px;
  }
`;

const DetailTitle = styled.div`
  width: 183px;
  height: 55px;
  background-color: ${theme.palette.primaryLight};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

const DetailContentsBox = styled.div`
  grid-column: span 3;
  height: 524px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  background-color: white;
  margin-bottom: 20px;
  cursor: pointer;

  /* &:hover {
    padding-top: 20px;
  } */
  @media only screen and (max-width: ${response.pad}px) {
    grid-column: span 6;
    height: 450px;
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
  @media only screen and (max-width: 400px) {
    height: 242px;
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  min-height: 155px;
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
