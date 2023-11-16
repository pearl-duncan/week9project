import { BACKEND_URL } from "../Home";

export const addToCart = async (user_id, product_id) => {
  const url = BACKEND_URL + "/api/add-to-cart";
  const body = { user_id, product_id };
  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
  const data = await res.json()
  return data
};
