import publicApi from "@/services/publicApi";
import api from "@/services/api";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export async function loginUser(data: LoginData) {
  const response = await publicApi.post("/auth/login", data)
  return response.data.data ?? response.data
}

export async function registerUser(data: RegisterData) {
  const response = await publicApi.post("/auth/register", data)
  return response.data.data ?? response.data
}

export async function getMe(token: string) {
  const response = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}