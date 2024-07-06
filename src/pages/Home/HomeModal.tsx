import styled from "styled-components";
import theme from "../../styles/theme";

interface IProps {
  handleModal: () => void;
  handleExpire: () => void;
}

export const HomeModal = ({ handleExpire, handleModal }: IProps) => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  return (
    <Container>
      <img src={`${IMGURL}modal2.png`} alt="popup" width={"1000px"} />
      <Title>7/8(월) 암재활병동 OPEN / 24시 상담문의 : 010-3964-0054</Title>
      <ButtonContainer>
        <Button
          style={{ borderRight: "1px solid #3B3E40" }}
          onClick={handleExpire}
        >
          24시간동안 그만보기
        </Button>
        <Button onClick={handleModal}>X 닫기</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 0px;
  align-content: center;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Title = styled.div`
  ${theme.typography.title1}
  border-bottom: 1px solid #3B3E40;
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.div`
  color: #3b3e40;
  cursor: pointer;
  flex: 1;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
