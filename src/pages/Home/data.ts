import adress from "./adress.svg";
import call from "./call.svg";
import email from "./email.svg";
import time from "./time.svg";

export const Infos = [
  {
    label: ["Adress"],
    content: ["제주선한병원 제주특별자치도 제주시 중앙로 616"],
    icon: [adress],
    row: 2,
  },
  {
    label: ["진료시간"],
    content: [
      "평일  AM 08:30 ~ PM 05:30",
      "토요일  AM : 08:30~ PM 12:30",
      "일요일 / 공휴일 휴무",
    ],
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
