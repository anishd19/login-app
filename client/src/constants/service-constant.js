const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 5000;

let HOST = "http://0.0.0.0:" + PORT;

if (isProduction) {
  HOST = "http://0.0.0.0:" + PORT;
}

export const SERVICE_CONSTANT = {
  LOGIN: HOST + "/api/users/login",
  REGISTER: HOST + "/api/users"
};