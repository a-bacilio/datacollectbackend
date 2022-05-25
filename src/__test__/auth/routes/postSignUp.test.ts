import { mockUser } from "./../../../mock/mockData";
import supertest from "supertest";
import app from "../../../app";
import { mockDatabase } from "../../../mock/mockDatabase";

const api = supertest(app);
const db = mockDatabase();
const API_ROUTE = "/api/v1/signup";

beforeAll(async () => (await db).connect());
afterAll(async () => (await db).closeDatabase());

describe("POST /api/v1/signup signUp validate body requests", () => {
  it("should return status 400 when no provided body", async () => {
    const response = await api
      .post(API_ROUTE)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      msg: "La confirmación de contraseña es requerida",
      status: false,
      type: "validation",
    });
  });
  it("should return status 400 when no email in body", async () => {
    const { email, ...body } = mockUser;
    const response = await api
      .post(API_ROUTE)
      .send(body)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      msg: "El correo es requerido",
      status: false,
      type: "validation",
    });
  });
  it("should return status 400 when no name in body", async () => {
    const { name, ...body } = mockUser;
    const response = await api
      .post(API_ROUTE)
      .send(body)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      msg: "El nombre es requerido",
      status: false,
      type: "validation",
    });
  });
  it("should return status 400 when no password in body", async () => {
    const { password, ...body } = mockUser;
    const response = await api
      .post(API_ROUTE)
      .send(body)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      msg: "La contraseña no coincide",
      status: false,
      type: "validation",
    });
  });
  it("should return status 400 when no password cofirmation in body", async () => {
    const { passwordConfirmation, ...body } = mockUser;
    const response = await api
      .post(API_ROUTE)
      .send(body)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      msg: "La confirmación de contraseña es requerida",
      status: false,
      type: "validation",
    });
  });
  it("should return status 201 when body is correct", async () => {
    const response = await api
      .post(API_ROUTE)
      .send(mockUser)
      .set("Accept", "application/json");

    expect(response.status).toEqual(201);
    expect(response.body.body.name).toEqual("userx");
    expect(response.body.body.email).toEqual("userx@gmail.com");
  });
});
