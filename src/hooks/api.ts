import { useCallback } from "react";
import { useAxios } from "./axios";

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
