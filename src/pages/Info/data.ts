export const AboutNavi = [
  {
    label: "비급여항목",
    id: 0,
  },
  {
    label: "진료안내",
    id: 1,
  },
  {
    label: "입퇴원안내",
    id: 2,
  },
  {
    label: "증명서발급",
    id: 3,
  },
];

export const HeaderMenus = [
  {
    label: "분류",
    row: 25,
    col: 2,
  },
  {
    label: "항목",
    row: 45,
    col: 1,
  },
  {
    label: "가격정보 (단위 : 원)",
    row: 30,
    col: 1,
  },
  {
    label: "코드",
    row: 12,
    col: 1,
  },
  {
    label: "명칭",
    row: 33,
    col: 1,
  },
  {
    label: "비용",
    row: 10,
    col: 1,
  },
  {
    label: "최저비용",
    row: 10,
    col: 1,
  },
  {
    label: "최고비용",
    row: 10,
    col: 1,
  },
];

export const Header3_1 = [
  {
    label: "진료과목",
    row: 20,
    col: 1,
  },
  {
    label: "의사명",
    row: 20,
    col: 1,
  },
  {
    label: "구분",
    row: 15,
    col: 1,
  },
  {
    label: "월",
    row: 9,
    col: 1,
  },
  {
    label: "화",
    row: 9,
    col: 1,
  },
  {
    label: "수",
    row: 9,
    col: 1,
  },
  {
    label: "목",
    row: 9,
    col: 1,
  },
  {
    label: "금",
    row: 9,
    col: 1,
  },
];

export const TableDatas3_1 = [
  {
    label: "가정의학과",
    row: 20,
    col: 2,
  },
  {
    label: "고재홍",
    row: 20,
    col: 2,
  },
  {
    label: "오전",
    row: 15,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "오후",
    row: 15,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "휴진",
    row: 9,
    col: 1,
    color: "red",
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
];

export const TableDatas3_2 = [
  {
    label: "재활의학과",
    row: 20,
    col: 2,
  },
  {
    label: "이장복",
    row: 20,
    col: 2,
  },
  {
    label: "오전",
    row: 15,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "오후",
    row: 15,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "휴진",
    row: 9,
    col: 1,
    color: "red",
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
  {
    label: "○",
    row: 9,
    col: 1,
  },
];

export interface ITableData {
  type: string;
  code: string;
  name: string;
  price: string;
  min: string;
  max: string;
}

export const TableDatas: ITableData[] = [
  {
    type: "검체검사료",
    code: "CZ3940000",
    name: "인플루엔자 A·B 바이러스 항원검사[현장검사]",
    price: "30,000",
    min: "",
    max: "",
  },
  {
    type: "기능검사료",
    code: "FY8940000",
    name: "자율신경계이상검사/심박변이도검사",
    price: "30,000",
    min: "",
    max: "",
  },
  {
    type: "이학요법료",
    code: "MX1220000",
    name: "도수치료",
    price: "",
    min: "50,000",
    max: "100,000",
  },
  {
    type: "이학요법료",
    code: "MZ0090000",
    name: "전산화 인지재활치료[주의·기억]",
    price: "30,000",
    min: "",
    max: "",
  },
  {
    type: "이학요법료",
    code: "MZ0120000",
    name: "비침습적 무통증 신호요법",
    price: "",
    min: "100,000",
    max: "200,000",
  },
  {
    type: "처치 및 수술료(근골)",
    code: "SZ0840000",
    name: "체외충격파치료",
    price: "",
    min: "30,000",
    max: "50,000",
  },
  {
    type: "예방접종료",
    code: "3Z5200301",
    name: "대상포진_조스타박스주",
    price: "150,000",
    min: "",
    max: "",
  },
  {
    type: "예방접종료",
    code: "3Z5201701",
    name: "폐렴구균_프리베나13주",
    price: "120,000",
    min: "",
    max: "",
  },
  {
    type: "예방접종료",
    code: "3Z5201112",
    name: "인플루엔자_보령플루Ⅷ테트라백신주",
    price: "40,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ010000",
    name: "일반 진단서",
    price: "20,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ010000",
    name: "건강 진단서",
    price: "20,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ010002",
    name: "근로능력평가용 진단서",
    price: "10,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ030000",
    name: "사망진단서",
    price: "10,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ070001",
    name: "장애진단서_신체적장애",
    price: "15,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ100000",
    name: "국민연금 장애심사용진단서",
    price: "15,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ070003",
    name: "후유장애진단서",
    price: "100,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ080000",
    name: "병무용진단서",
    price: "20,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ020001",
    name: "상해진단서_3주미만",
    price: "100,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ020002",
    name: "상해진단서_3주이상",
    price: "150,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDE010001",
    name: "영문진단서_일반",
    price: "20,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ090002",
    name: "입퇴원 확인서",
    price: "1,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ090004",
    name: "통원 확인서",
    price: "1,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ090007",
    name: "진료 확인서",
    price: "3,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ140001",
    name: "향후진료비추정서_천만원미만",
    price: "50,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ140002",
    name: "향후진료비추정서_천만원이상",
    price: "100,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ170000",
    name: "장애인증명서",
    price: "1,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ110101",
    name: "의무기록사본_1-5매",
    price: "1,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ110102",
    name: "의무기록사본_6매 이상",
    price: "100",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ110004",
    name: "진료기록영상_CD복사",
    price: "10,000",
    min: "",
    max: "",
  },
  {
    type: "제증명수수료",
    code: "PDZ160000",
    name: "제증명서 사본",
    price: "1,000",
    min: "",
    max: "",
  },
  {
    type: "방사선치료료",
    code: "HZ272",
    name: "방사선 온열치료 및 온열치료계획",
    price: "",
    min: "200,000",
    max: "300,000",
  },
];
