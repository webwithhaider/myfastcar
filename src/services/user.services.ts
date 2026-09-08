import { http } from "@/lib/http/client";
import { ApiResponse } from "@/types/api";
import { User } from "@/types/models";

export const UserService = {
  getAll(): Promise<ApiResponse<User[]>> {
    return http.get("/users");
  },

  getById(id: string): Promise<ApiResponse<User>> {
    return http.get(`/users/${id}`);
  },

  create(payload: Partial<User>): Promise<ApiResponse<User>> {
    return http.post("/users", payload);
  },

  update(id: string, payload: Partial<User>): Promise<ApiResponse<User>> {
    return http.patch(`/users/${id}`, payload);
  },

  delete(id: string): Promise<void> {
    return http.delete(`/users/${id}`);
  },
};