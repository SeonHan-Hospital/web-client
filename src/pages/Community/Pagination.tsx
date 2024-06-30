import styled from "styled-components";
import left from "./left.svg";
import right from "./right.svg";

interface IProps {
  totalElement: number;
  page: number;
  handlePage: (page: number) => void;
}

export const Pagination = ({ totalElement, page, handlePage }: IProps) => {
  const pages = new Array(Math.ceil(totalElement / 10)).fill(0);

  return (
    <Container>
      <ImgWrapper onClick={() => handlePage(page - 1 < 0 ? 0 : page - 1)}>
        <Img src={left} alt="left" />
      </ImgWrapper>
      <IndexWrapper page={page + 1}>
        {pages.map((el, idx) => (
          <div key={idx} onClick={() => handlePage(idx)}>
            {idx + 1}
          </div>
        ))}
      </IndexWrapper>
      <ImgWrapper
        onClick={() => handlePage(page < pages.length - 1 ? page + 1 : page)}
      >
        <Img src={right} alt="left" />
      </ImgWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexWrapper = styled.div<{ page: number }>`
  width: 100%;
  max-width: 280px;
  display: flex;
  align-items: center;

  > * {
    flex: 1;
    cursor: pointer;
    text-align: center;
  }

  ${(props) => `
    :nth-child(${props.page}) {
      color: #1467b0;
    }
  `}
`;

const Img = styled.img`
  cursor: pointer;
`;
