export interface IGetQuestionParams {
  page: number;
  limit: number;
  content: string;
  subject: string;
  author: string;
}

export interface ICreateQuestion {
  password: string;
  content: string;
  subject: string;
  author: string;
}
