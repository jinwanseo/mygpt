import axios from "axios";
import { useEffect } from "react";

export const BASE_URL = "http://localhost:3000";

// Axios 모듈 기본 설정 (BaseUrl, 기본 header, 요청 제한 시간)
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

/**
 * @title Axios Hook (Custom Hook)
 * @description Axios를 React 상태 관리와 함께 사용하기 위한 Custom Hook
 */
export default function useAxios(props) {
  const handlers = {
    onRequest: async (config) => {
      return config;
    },
    onResponse: (response) => {
      return response;
    },
    onError: (err) => {
      return err;
    },
  };

  const requestInterceptor = api.interceptors.request.use(handlers.onRequest);
  const responseInterceptor = api.interceptors.response.use(
    (response) => handlers.onResponse(response),
    (error) => handlers.onError(error)
  );
  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);
}
