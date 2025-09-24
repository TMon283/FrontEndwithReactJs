import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/stores/index";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
): TSelected => useSelector(selector);

export default axiosInstance;
