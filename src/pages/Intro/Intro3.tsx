import styled from "styled-components";
import { response } from "../../styles/theme";
import { Infos } from "../Home/data";
import map from "../Home/Map.svg";

export const Intro3 = () => {
  return (
    <Container>
      <InfoContainer>
        <MapWrapper src={map} alt="map" />
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

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  height: 600px;
  padding: 50px 30px;
  @media only screen and (max-width: ${response.pad}px) {
    height: 1000px;
    grid-template-rows: repeat(15, 1fr);
  }
  @media only screen and (max-width: ${response.mobile}px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 15px;
    height: 900px;
  }
`;

const MapWrapper = styled.img`
  grid-column: span 8;
  grid-row: span 7;
  width: 100%;
  max-width: 750px;
  max-height: 570px;
  @media only screen and (max-width: ${response.pad}px) {
    grid-column: span 12;
    height: 400px;
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
  min-width: 280px;
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
