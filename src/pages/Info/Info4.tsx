import styled from "styled-components";
import theme from "../../styles/theme";
import { useGetAgreeFile, useGetWarrant } from "../../hooks/api";
import { useCallback, useEffect } from "react";

export const Info4 = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  const [agreeReq, agreeRes] = useGetAgreeFile();
  const [warrantReq, warrantRes] = useGetWarrant();

  const handleDownload = useCallback(
    (idx: number) => {
      if (idx === 0) {
        agreeReq();
      } else {
        warrantReq();
      }
    },
    [agreeReq, warrantReq]
  );

  useEffect(() => {
    if (agreeRes.data && agreeRes.called) {
      const url = window.URL.createObjectURL(new Blob([agreeRes.data]));
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", "의무기록사본 발급 동의서.hwp");
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } else if (agreeRes.error && agreeRes.called) {
      alert("다운로드에 실패했습니다.");
    }
  }, [agreeRes]);

  useEffect(() => {
    if (warrantRes.data && warrantRes.called) {
      const url = window.URL.createObjectURL(new Blob([warrantRes.data]));
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", "의무기록사본 발급 위임장.hwp");
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } else if (warrantRes.called && warrantRes.error) {
      alert("다운로드에 실패했습니다.");
    }
  }, [warrantRes]);

  return (
    <Container>
      <Title>증명서발급</Title>
      <CircleContainer>
        <Circle>01</Circle>
        <Circle>02</Circle>
        <Circle>03</Circle>
        <Circle>04</Circle>
      </CircleContainer>
      <Line />
      <CircleContainer>
        <CircleText>병원 접수</CircleText>
        <CircleText>증명서 발급</CircleText>
        <CircleText>비용 수납</CircleText>
        <CircleText>증명서 수령</CircleText>
      </CircleContainer>
      <MobileImg src={`${IMGURL}info4_10.svg`} alt="info4_10" />
      <ButtonContainer>
        <Download>
          <div style={{ marginLeft: "20px" }}>의무기록사본 발급 동의서</div>
          <DownloadImg
            src={`${IMGURL}download.svg`}
            alt="download"
            onClick={() => handleDownload(0)}
          />
        </Download>
        <Download>
          <div style={{ marginLeft: "20px" }}>의무기록사본 발급 위임장</div>
          <DownloadImg
            src={`${IMGURL}download.svg`}
            alt="download"
            onClick={() => handleDownload(1)}
          />
        </Download>
      </ButtonContainer>
      <SubTitle>환자 본인 또는 동의를 받을 수 있는 경우</SubTitle>
      <Detail>의료법 시행 규칙 제 13조의 3</Detail>
      <TableContainer>
        <TableHeader>
          <Text>본인인 경우</Text>
        </TableHeader>
        <Cell>
          <Text>1. 만 17세 이상 주민등록증 발급자 - 환자 본인의 신분증</Text>
          <Text>2. 만 14세 이상~만 17세 미만 주민등록증 미 발급자</Text>
          <Text style={{ fontSize: "16px" }}>
            ※ 본인임을 확인할 수 있는 서류 (학생증이나 회원증 등)
          </Text>
          <Text>
            4. 만 14세 미만 - 친족관계임을 확인할 수 있는 서류 (가족관계증명서,
            주민등록등본 등)
          </Text>
        </Cell>
        <TableHeader>
          <Text>친족의 경우</Text>
        </TableHeader>
        <Cell>
          <Text>1. 사본발급 신청자의 신분증 사본</Text>
          <Text>
            2. 가족관계증명서, 주민등록 등본 등 친족관계임을 확인 할 수 있는
            서류
          </Text>
          <Text>3. 환자가 자필 서명한 [별지 제9호의 2서식]의 동의서</Text>
          <Text style={{ fontSize: "16px" }}>
            ※ 다만, 환자가 만 14세 미만의 미성년자인 경우에는 제외되며, 신청인이
            법정대리인이 아닐 경우 법정대리인의 동의서 첨부필요
          </Text>
          <Text>4. 환자의 신분증 사본</Text>
          <Text style={{ fontSize: "16px" }}>
            ※ 다만, 환자가 만 17세 미만으로 주민등록법 제24조제1항에 따른
            주민등록증이 발급되지 아니한 경우에는 제외
          </Text>
        </Cell>
        <TableHeader>
          <Text>대리인일 경우</Text>
        </TableHeader>
        <Cell>
          <Text>1. 사본발급 신청자의 신분증 사본</Text>
          <Text>
            2. 환자가 자필 서명한 별지 [제9호의 2서식]의 동의서 및 별지 [제9호의
            3서식]의 위임장
          </Text>
          <Text style={{ fontSize: "16px" }}>
            ※ 다만, 환자가 만 14세 미만의 미성년자인 경우 환자의 법정대리인임을
            확인할 수 있는 서류 첨부
          </Text>
          <Text>3. 환자의 신분증 사본</Text>
          <Text style={{ fontSize: "16px" }}>
            ※ 다만, 환자가 만 17세 미만으로 주민등록법 제24조제1항에 따른
            주민등록증이 발급되지 아니한 경우에는 제외
          </Text>
        </Cell>
      </TableContainer>
      <SubTitle>환자의 동의를 받을 수 없는 경우</SubTitle>
      <Detail>의료법 시행 규칙 제 13조의 3 제 3항</Detail>
      <TableContainer>
        <TableHeader>
          <Text>환자가 사망한 경우</Text>
        </TableHeader>
        <Cell>
          <Text>1. 사본발급을 요청하는 자의 신분증 사본</Text>
          <Text>
            2. 가족관계증명서, 주민등록표 등본 등 친족관계를 확인 할 수 있는
            서류
          </Text>
          <Text>
            3. 가족관계증명서, 제적등본, 사망진단서 등 사망사실을 확인할 수 있는
            서류
          </Text>
        </Cell>
        <TableHeader>
          <Text>
            환자가 의식불명 또는 의식불명은 아니지만 중증의 질환 부상으로
            자필서명을 할 수 없는 경우
          </Text>
        </TableHeader>
        <Cell>
          <Text>1. 사본발급을 요청하는 자의 신분증 사본</Text>
          <Text>
            2. 가족관계증명서, 주민등록표 등본 등 친족관계를 확인 할 수 있는
            서류
          </Text>
          <Text>
            3. 환자가 의식불명 또는 중증의 질환, 부상으로 자필서명을 할 수
            없음을 확인할 수 있는 진단서
          </Text>
        </Cell>
        <TableHeader>
          <Text>환자가 행방불명인 경우</Text>
        </TableHeader>
        <Cell>
          <Text>1. 사본발급을 요청하는 자의 신분증 사본</Text>
          <Text>
            2. 가족관계증명서, 주민등록표 등본 등 친족관계를 확인 할 수 있는
            서류
          </Text>
          <Text>
            3. 주민등록표 등본, 법원의 실종선고 결정문 사본등 행방불명 사실을
            확인할 수 있는 서류
          </Text>
        </Cell>
        <TableHeader>
          <Text>환자가 의사무능력자인 경우</Text>
        </TableHeader>
        <Cell>
          <Text>1. 사본발급을 요청하는 자의 신분증 사본</Text>
          <Text>
            2. 가족관계증명서, 주민등록표 등본 등 친족관계를 확인 할 수 있는
            서류
          </Text>
          <Text>
            3. 법원의 금치산 선고 결정문 사본 또는 의사 무능력자임을 증명하는
            정신과 전문의의 진단서
          </Text>
        </Cell>
        <TableHeader>
          <Text>환자의 친족이 없을 경우</Text>
        </TableHeader>
        <Cell>
          <Text>1. 형제 자매가 신청이 가능</Text>
          <Text>2. 사본을 요청하는 자의 신분증 사본</Text>
          <Text>
            3. 가족관계 확인서류( ① 친족이 없음을 증명하는 서류 ②
            형제자매관계입증서류)
          </Text>
          <Text>4. 사본발급(열람)확인서</Text>
        </Cell>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    width: 90%;
    margin-left: 5%;
  }
`;

const Title = styled.div`
  width: 100%;
  margin-top: 70px;
  height: 72px;
  display: flex;
  margin-bottom: 70px;
  justify-content: center;
  align-items: center;
  ${theme.typography.title1};

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const MobileImg = styled.img`
  display: none;
  width: 100%;
  margin-bottom: 40px;

  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const Detail = styled.div`
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const CircleContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #1467b0;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

const Line = styled.div`
  width: 80%;
  max-width: 800px;
  height: 2px;
  background-color: #1467b0;
  position: relative;
  z-index: -1;
  top: -30px;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const CircleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  font-size: 20px;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Download = styled.div`
  width: 90%;
  max-width: 470px;
  margin: 20px 0;
  display: flex;
  min-height: 90px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e4e7;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
  }
`;

const DownloadImg = styled.img`
  margin: 0 20px;
  cursor: pointer;
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const TableHeader = styled.div`
  background-color: ${theme.palette.primary};
  color: white;
  width: 100%;
  min-height: 60px;
  display: flex;
  border: 0.5px solid #dddddd;
  font-weight: bold;
  align-items: center;
`;

const Text = styled.div`
  margin: 20px;
  font-size: 18px;
`;

const Cell = styled.div`
  border: 0.5px solid #dddddd;
  width: 100%;
  margin-bottom: 40px;
`;
