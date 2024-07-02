import styled from "styled-components";
import { Layout } from "../../components/Layout";
import theme from "../../styles/theme";
import { useCallback, useEffect, useState } from "react";
import { ICreateQuestion } from "../../hooks";
import { useCreateQuestion } from "../../hooks/api";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const IMGURL = process.env.REACT_APP_IMG_URL;
  const [values, setValues] = useState<ICreateQuestion>({
    password: "",
    content: "",
    author: "",
    subject: "",
  });
  const [postReq, postRes] = useCreateQuestion();
  const navigate = useNavigate();

  const handleValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [e.target.id]: e.target.value });
    },
    [values]
  );

  const handleClick = useCallback(() => {
    if (!values.subject) {
      alert("제목을 입력해주세요.");
      return 0;
    } else if (!values.author) {
      alert("성함을 입력해주세요.");
      return 0;
    } else if (!values.content) {
      alert("내용을 입력해주세요.");
      return 0;
    } else if (!values.password) {
      alert("비밀번호를 입력해주세요.");
      return 0;
    }
    postReq(values);
  }, [values, postReq]);

  useEffect(() => {
    if (postRes.called && postRes.data) {
      alert("작성되었습니다.");
      navigate("/커뮤니티");
    } else if (postRes.called && postRes.error) {
      alert(postRes.error);
    }
  }, [postRes, navigate]);

  return (
    <Layout>
      <Main src={`${IMGURL}infoBackground.svg`} alt="background" />
      <Container>
        <SemiContainer>
          <Title>고객서비스</Title>
          <SubTitle>
            궁금하신 점 남겨주시면 친절하게 답변 도와드리겠습니다. 입원 및
            예약은 전화 상담 부탁드립니다.
          </SubTitle>
          <TableContainer>
            <InputTitle
              onChange={(e) => handleValues(e)}
              id="author"
              placeholder="성함을 입력해주세요."
            />
            <InputTitle
              onChange={(e) => handleValues(e)}
              id="subject"
              placeholder="제목을 입력해주세요."
            />
            <PasswordWrapper>
              <InputPassword
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => handleValues(e)}
              />
            </PasswordWrapper>
            <InputText
              onChange={(e) => handleValues(e)}
              id="content"
              placeholder="내용을 입력해주세요."
            />
            <PasswordWrapper>
              <Button onClick={handleClick}>신청하기</Button>
            </PasswordWrapper>
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
  margin-bottom: 70px;
  font-size: 18px;
  white-space: pre-wrap;
  text-align: center;
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PasswordWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  left: -15px;
`;

const InputTitle = styled.input`
  all: unset;
  width: 100%;
  max-width: 800px;
  height: 45px;
  border-radius: 4px;
  margin: 10px 0;
  border: 1px solid #e0e4e7;
  padding: 0 15px;
  ::placeholder {
    font-size: 16px;
    color: #888888;
  }
`;

const InputPassword = styled(InputTitle)`
  max-width: 220px;
`;

const InputText = styled.textarea`
  all: unset;
  border: 1px solid #e0e4e7;
  margin: 10px 0;
  width: 100%;
  min-height: 280px;
  max-width: 800px;
  border-radius: 4px;
  padding: 10px 15px;
  ::placeholder {
    font-size: 16px;
    color: #888888;
  }
`;

const Button = styled.div`
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  height: 50px;
  color: white;
  margin-top: 60px;
  margin-bottom: 80px;
  background-color: #1467b0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
