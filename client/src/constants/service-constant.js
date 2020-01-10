const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 1234;

let HOST = "http://localhost:" + PORT;

if (isProduction) {
  HOST = "http://localhost";
}

export const SERVICE_CONSTANT = {
  LOGIN: HOST + "/api/users/login",
  REGISTER: HOST + "/api/users"
};