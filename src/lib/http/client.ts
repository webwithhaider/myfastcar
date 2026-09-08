"use client";

import axios from "axios";
import { env } from "@/config/env";

export const http = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 15000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  // attach token if needed
  // const token = getAccessToken();
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const normalizedError = {
      status: error.response?.status,
      message: error.response?.data?.message || "Unexpected error",
    };
    return Promise.reject(normalizedError);
  }
);