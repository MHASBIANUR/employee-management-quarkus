import axios from "axios";
import type { Employee } from "../types/employee";

const api = axios.create({
  baseURL: "/",
});

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await api.get("/api/employees");
  return response.data;
};

export const getEmployee = async (id: number): Promise<Employee> => {
  const response = await api.get(`/api/employees/${id}`);
  return response.data;
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const response = await api.post("/api/employees", employee);
  return response.data;
};

export const updateEmployee = async (
  id: number,
  employee: Employee
): Promise<Employee> => {
  const response = await api.put(`/api/employees/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id: number): Promise<void> => {
  await api.delete(`/api/employees/${id}`);
};