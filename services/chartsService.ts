// services/dataService.ts
import { useQuery } from "react-query";

export const fetchData = async (resource: string) => {
  const response = await fetch(`/api/${resource}`);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return response.json();
};

export const useAsideData = () => {
  return useQuery("aside", () => fetchData("aside"));
};

export const useTodayData = () => {
  return useQuery("clients", () => fetchData("day-hour"));
};

export const useDayData = () => {
  return useQuery("day", () => fetchData("day"));
};
