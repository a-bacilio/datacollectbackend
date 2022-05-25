import { mockUser } from "../../../mock/mockData";
import supertest from "supertest";
import app from "../../../app";
import { mockDatabase } from "../../../mock/mockDatabase";

const api = supertest(app);
const db = mockDatabase();
const API_ROUTE = "/api/v1/login";

beforeAll(async () => (await db).connect());
afterAll(async () => (await db).closeDatabase());

describe("POST /api/v1/signup signUp validate body requests", () => {
  it("should return status 400 when no provided body", async () => {
    const response = await api
      .post(API_ROUTE)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      msg: "contraseña es requerida",
      status: false,
      type: "validation",
    });
  });
  it("should return status 500 when no email in body", async () => {
    const { name, passwordConfirmation, ...body } = mockUser;
    const response = await api
      .post(API_ROUTE)
      .send(body)
      .set("Accept", "application/json");

    expect(response.status).toEqual(500);
    expect(response.body).toEqual({
      msg: "Error: Usuario o correo es incorrecto",
      status: false,
    });
  });
  it("should return status 500 when no password in body", async () => {
    const { password, passwordConfirmation, ...body } = mockUser;
    const response = await api
      .post(API_ROUTE)
      .send(body)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      msg: "contraseña es requerida",
      status: false,
      type: "validation",
    });
  });
});

describe("POST /api/v1/login postLoginUser login a user customer", () => {
  // ------- CREAR Usuario
  it("should return 201 when create a new user customer with role customer", async () => {
    const response = await api
      .post("/api/v1/signup")
      .send(mockUser)
      .set("Accept", "application/json");
  });
  // FIN CREAR USUARIO
  it("should return 200 when login", async () => {
    const { passwordConfirmation, name, ...body } = mockUser;
    const response = await api
      .post(API_ROUTE)
      .send(mockUser)
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.body.userName).toEqual(mockUser.name);
  });
});
