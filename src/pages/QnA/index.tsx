import styled from "styled-components";
import theme from "../../styles/theme";
import { Layout } from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IQuestion } from "../Community";
import { useGetAnswers, useGetQuestion } from "../../hooks/api";
import { dateHandler } from "../../utils/functinos";

interface IAnswer {
  id: number;
  questionId: number;
  author: string;
  content: string;
  createAt: string;
  updatedAt: string;
}

export const QnA = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  const location = useLocation();
  const id = Number(
    location.pathname.split("/")[location.pathname.split("/").length - 1]
  );
  const [questionData, setQuestionData] = useState<IQuestion>({
    subject: "",
    author: "",
    createdAt: "",
    updatedAt: "",
    QnA_number: 0,
    content: "",
    id: id,
    answerId: [],
  });
  const [answerData, setAnswerData] = useState<IAnswer[]>([]);
  const [getAnswerReq, getAnswerRes] = useGetAnswers();
  const [getQuestionReq, getQuestionRes] = useGetQuestion();
  const navigate = useNavigate();

  const handleNavi = useCallback(() => {
    navigate("/커뮤니티");
  }, [navigate]);

  useEffect(() => {
    if (id) {
      getQuestionReq(id);
      getAnswerReq(id);
    }
  }, [id, getQuestionReq, getAnswerReq]);

  useEffect(() => {
    if (getQuestionRes.called && getQuestionRes.data) {
      setQuestionData(getQuestionRes.data);
    } else if (getQuestionRes.called && getQuestionRes.error) {
      alert(getQuestionRes.error);
    }
  }, [getQuestionRes]);

  useEffect(() => {
    if (getAnswerRes.called && getAnswerRes.data) {
      setAnswerData(getAnswerRes.data.data);
    } else if (getAnswerRes.called && getAnswerRes.error) {
      alert(getAnswerRes.error);
    }
  }, [getAnswerRes]);

  return (
    <Layout>
      <Main src={`${IMGURL}infoBackground.svg`} alt="background" />
      <Container>
        <SemiContainer>
          <Title>답변글 보기</Title>
          <TableContainer>
            <TableHeader style={{ borderTop: "1px solid black" }}>
              <div>글 제목</div>
              <div>{questionData.subject}</div>
            </TableHeader>
            <TableHeader>
              <div>작성자</div>
              <div>{questionData.author}</div>
            </TableHeader>
            <TableHeader>
              <div>작성일</div>
              <div>{dateHandler(questionData.createdAt)}</div>
            </TableHeader>
            <TableContents>{questionData.content}</TableContents>
            <TableContents
              style={{
                border: "none",
                backgroundColor: "#f3f8fc",
                marginTop: "20px",
              }}
            >
              {answerData.length > 0
                ? answerData[0].content
                : "답변이 등록되지 않았습니다."}
            </TableContents>
            <ButtonContainer>
              <Button onClick={handleNavi}>목록보기</Button>
            </ButtonContainer>
          </TableContainer>
        </SemiContainer>
      </Container>
    </Layout>
  );
};

const Main = styled.img`
  width: 100vw;
  object-fit: cover;
  min-height: 200px;
`;

const Container = styled.div`
  margin: auto;
  max-width: 1260px;
`;

const SemiContainer = styled.div`
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
  margin-bottom: 70px;
  justify-content: center;
  align-items: center;
  ${theme.typography.title1};

  @media only screen and (max-width: 500px) {
    font-size: 20px;
    margin: 40px 0%;
  }
`;

const TableContainer = styled.div`
  width: 90%;
  max-width: 800px;
`;

const TableHeader = styled.div`
  display: flex;
  min-height: 40px;
  width: 100%;
  border-bottom: 1px solid #e0e4e7;

  :nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :nth-child(2) {
    flex: 4;
    display: flex;
    align-items: center;
    max-width: 640px;
  }
`;

const TableContents = styled.div`
  width: calc(100% - 15px);
  padding: 15px;
  min-height: 280px;
  white-space: pre;
  border-bottom: 1px solid #e0e4e7;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const Button = styled.div`
  cursor: pointer;
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #e0e4e7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
