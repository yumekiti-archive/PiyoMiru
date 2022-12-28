import client from "./client"

// 取得
export const getUser = () => client.get("/user");