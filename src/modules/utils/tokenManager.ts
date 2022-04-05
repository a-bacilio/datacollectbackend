import jwt from "jsonwebtoken";

export const createAuthToken = (payload: {}): string =>
  jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: "24h",
  });

  export const createColaboratorToken = (payload: {}): string =>
  jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: "60s",
  });

  export const createColaboratorAccessToken = (payload: {}): string =>
  jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: "30d",
  });

export const validateToken = (token: string) =>
  <jwt.UserIDJwtPayload>jwt.verify(token, `${process.env.JWT_AUTH_SECRET}`);
