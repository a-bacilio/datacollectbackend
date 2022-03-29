import { model, Schema } from "mongoose";
import { ISchemaUser } from "../types/user";

export const SchemaUser = new Schema<ISchemaUser>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [8, "La contraseña debe de ser mínimo 8 caracteres"],
    },
    role: {
      type: String,
      enum: ["customer", "admin", "pharmacist"],
      default: "customer",
    },
    avatarUrl: {
      type: String,
      default: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    addresses: [String],
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

SchemaUser.methods.toJSON = function UserReturn() {
  const { _id, name, email, role, avatarUrl, addresses, status } =
    this.toObject();
  return { id: _id, name, email, role, avatarUrl, addresses, status };
};

export const UserModel = model<ISchemaUser>("User", SchemaUser);
