const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 5000;

let HOST = "http://localhost:" + PORT;

if (isProduction) {
  HOST = "https://loginappanishd19.herokuapp.com";
}

export const SERVICE_CONSTANT = {
  LOGIN: HOST + "/api/users/login",
  REGISTER: HOST + "/api/users"
};