import styled from "styled-components";
import { IQuestion } from ".";
import { dateHandler } from "../../utils/functinos";
import { useCallback } from "react";

const Header = () => {
  return (
    <HeaderContainer>
      <div>No.</div>
      <div>글 제목</div>
      <div>이름</div>
      <div>작성일</div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #3b3e40;
  border-bottom: 1px solid #3b3e40;
  height: 50px;

  :nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  :nth-child(2) {
    flex: 2;
    display: flex;
    justify-content: center;
    font-size: 14px;
    align-items: center;
  }
  :nth-child(3) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  :nth-child(4) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

interface IProps {
  datas: IQuestion[];
}

export const CommuTable = ({ datas }: IProps) => {
  const handleAnswer = useCallback((data: IQuestion) => {
    if (data.answerId.length > 0) {
      return `${data.subject}\n(답변완료)`;
    } else {
      return `${data.subject}`;
    }
  }, []);

  return (
    <Container>
      <Header />
      {datas?.map((el) => (
        <Cell key={el.id}>
          <div>{el.QnA_number}</div>
          <div>{handleAnswer(el)}</div>
          <div>{el.author}</div>
          <div>{dateHandler(el.createdAt)}</div>
        </Cell>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Cell = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  min-height: 50px;
  :nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  :nth-child(2) {
    flex: 2;
    display: flex;
    font-size: 14px;
    align-items: center;
    white-space: pre-wrap;
  }
  :nth-child(3) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  :nth-child(4) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;
