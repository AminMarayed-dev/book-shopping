import axios from "axios";
import { api } from "./config.api";

export async function getProducts() {
  const response = await api.get("/products");
  return response.data;
}

export async function getProductById(id: string) {
  const response = await api.get(`/products/${id}`);
  return response.data;
}

export async function postProduct(data) {
  const response = await api.post(`/products`, data);
  return response.data;
}
