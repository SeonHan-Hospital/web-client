import styled from "styled-components";
import { menus, modalMenus } from "./data";
import down from "./down.svg";
import up from "./up.svg";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyAlert } from "../../utils/functinos";

interface IProps {
  handleGNB: () => void;
}

export const MobileGNB = ({ handleGNB }: IProps) => {
  const [open, setOpen] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const navigate = useNavigate();

  const handleOpen = useCallback(
    (idx: number) => {
      const arr = [...open];
      arr[idx] = !arr[idx];
      setOpen(arr);
    },
    [open]
  );

  const handleNavi = useCallback(
    (path: string, tap: number) => {
      if (path === "/이용안내" && tap === 0) {
        navigate(path, {
          state: {
            tap,
          },
        });
        handleGNB();
      } else {
        emptyAlert();
      }
    },
    [navigate, handleGNB]
  );

  return (
    <Container>
      <Backdrop />
      {menus.map((el, idx) => (
        <div style={{ zIndex: 10 }} key={idx}>
          <Menu onClick={() => handleOpen(idx)}>
            <MenuText>{el.label}</MenuText>
            <IconWrapper>
              <img src={open[idx] ? up : down} alt="icon" />
            </IconWrapper>
          </Menu>
          {open[idx] &&
            modalMenus[idx].map((modalEl) => (
              <Drop
                key={modalEl.label}
                style={{
                  backgroundColor:
                    modalEl.label !== "비급여항목" ? "#DDDDDD" : "white",
                  color: modalEl.label !== "비급여항목" ? "gray" : "black",
                }}
                onClick={() => handleNavi(modalEl.path, modalEl.tap)}
              >
                <DropText
                  style={{
                    textDecoration:
                      modalEl.label !== "비급여항목" ? "line-through" : "none",
                  }}
                >
                  {"- " + modalEl.label}
                </DropText>
              </Drop>
            ))}
        </div>
      ))}
    </Container>
  );
};

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 1;
  background-color: white;
`;

const Container = styled.div`
  height: calc(100vh - 60px);
  position: fixed;
  background-color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 2;
  overflow-y: scroll;
`;

const Menu = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const MenuText = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  z-index: 99;
`;

const Drop = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 99;
`;

const DropText = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
`;
