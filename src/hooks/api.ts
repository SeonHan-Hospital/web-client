import { useCallback } from "react";
import { useAxios } from "./axios";
import { ICreateQuestion, IGetQuestionParams } from ".";

export const useGetAgreeFile = () => {
  const [request, response] = useAxios();

  const run = useCallback(() => {
    return request({
      url: "/files/download/진료기록_열람_및_사본발급_동의서.hwp",
      responseType: "blob",
    });
  }, [request]);

  return [run, response] as [typeof run, typeof response];
};

export const useGetWarrant = () => {
  const [request, response] = useAxios();

  const run = useCallback(() => {
    return request({
      url: "/files/download/진료기록_열람_및_사본발급_위임장.hwp",
      responseType: "blob",
    });
  }, [request]);

  return [run, response] as [typeof run, typeof response];
};

export const useGetQuestionList = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (params: IGetQuestionParams) => {
      return request({
        url: `/question?page=${params.page}&limit=${params.limit}&author=${params.author}&content=${params.content}&subject=${params.subject}`,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useCreateQuestion = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (data: ICreateQuestion) => {
      return request({
        url: "/question",
        method: "POST",
        data: data,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useGetQuestion = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (id: number) => {
      return request({
        url: `/question/${id}`,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useGetAnswers = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (id: number) => {
      return request({
        url: `/answer?questionId=${id}`,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};
