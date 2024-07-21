import dotenv from "dotenv";

// Tải biến môi trường từ file .env
dotenv.config();

const { PORT, MONGO_DB_URI, JWT_SECRET, NODE_ENV } = process.env;

// In giá trị của các biến môi trường để kiểm tra
console.log("PORT:", PORT);
console.log("MONGO_DB_URI:", MONGO_DB_URI);
console.log("JWT_SECRET:", JWT_SECRET);
console.log("NODE_ENV:", NODE_ENV);

// Kiểm tra từng biến môi trường và thông báo lỗi nếu thiếu
if (!PORT) {
  throw new Error("Thiếu PORT trong biến môi trường");
}

if (!MONGO_DB_URI) {
  throw new Error("Thiếu MONGO_DB_URI trong biến môi trường");
}

if (!JWT_SECRET) {
  throw new Error("Thiếu JWT_SECRET trong biến môi trường");
}

if (!NODE_ENV) {
  throw new Error("Thiếu NODE_ENV trong biến môi trường");
}

export { PORT, MONGO_DB_URI, JWT_SECRET, NODE_ENV };
