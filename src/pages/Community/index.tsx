import styled from "styled-components";
import theme from "../../styles/theme";
import { Layout } from "../../components/Layout";
import { CommuTable } from "./CommuTable";
import { useCallback, useEffect, useState } from "react";
import { useGetQuestionList } from "../../hooks/api";
import { Pagination } from "./Pagination";

export interface IQuestion {
  id: number;
  author: string;
  subject: string;
  content: string;
  QnA_number: number;
  answerId: number[];
  createdAt: string;
  updatedAt: string;
  message?: null;
}

export const Community = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  const [tableDatas, setTableDatas] = useState<IQuestion[]>([]);
  const [getQuestionReq, getQuestionRes] = useGetQuestionList();
  const [totalElement, setTotalElement] = useState(0);
  const [page, setPage] = useState(0);

  const handlePage = useCallback((page: number) => {
    setPage(page);
  }, []);

  useEffect(() => {
    getQuestionReq({
      page: page,
      limit: 10,
      author: "",
      content: "",
      subject: "",
    });
  }, [page, getQuestionReq]);

  useEffect(() => {
    if (getQuestionRes.called && getQuestionRes.data) {
      const rows = getQuestionRes.data.rows;
      const arr = rows.map((el: IQuestion, index: number) => {
        return {
          ...el,
          QnA_number: getQuestionRes.data.count - page * 10 - index,
        };
      });
      setTableDatas(arr);
      setTotalElement(getQuestionRes.data.count);
    } else if (getQuestionRes.called && getQuestionRes.error) {
      alert(getQuestionRes.data.message);
    }
  }, [getQuestionRes, page]);
  return (
    <Layout>
      <Main src={`${IMGURL}infoBackground.svg`} alt="background" />
      <Container>
        <SemiContainer>
          <Title>고객서비스</Title>
          <SubTitle>
            환자 또는 보호자분의 전화번호를 남기시면, 상담원이 친절하게 예약을
            도와드리겠습니다.
          </SubTitle>
          <TableContainer>
            <AlignWrapper>
              <Button>글쓰기</Button>
            </AlignWrapper>
            <CommuTable datas={tableDatas} />
            <Pagination
              handlePage={handlePage}
              page={page}
              totalElement={totalElement}
            />
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
  max-width: 1090px;
  margin-bottom: 20px;
  font-size: 18px;
  white-space: pre-wrap;
  text-align: center;
`;

const TableContainer = styled.div`
  width: 90%;
  max-width: 1000px;
`;

const AlignWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin: 13px 0;
`;

const Button = styled.div`
  width: 70px;
  height: 35px;
  color: white;
  border-radius: 4px;
  background-color: #1467b0;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`;
