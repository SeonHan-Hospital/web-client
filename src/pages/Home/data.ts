const adress = "https://sunhanimgs.s3.ap-northeast-2.amazonaws.com/adress.svg";
const call = "https://sunhanimgs.s3.ap-northeast-2.amazonaws.com/call.svg";
const email = "https://sunhanimgs.s3.ap-northeast-2.amazonaws.com/email.svg";
const time = "https://sunhanimgs.s3.ap-northeast-2.amazonaws.com/time.svg";

export const Infos = [
  {
    label: ["Adress"],
    content: ["제주특별자치도 제주시 중앙로 616"],
    icon: [adress],
    row: 2,
  },
  {
    label: ["진료시간"],
    content: ["평일  AM 08:30 ~ PM 05:30", "토요일 / 일요일 / 공휴일 휴무"],
    icon: [time],
    minHeight: 180,
    row: 2,
  },
  {
    label: ["Tel", "E-mail"],
    content: ["sunhan0054@naver.com", "전화 064-722-0054 / 팩스 064-722-0064"],
    icon: [call, email],
    row: 2,
  },
];
