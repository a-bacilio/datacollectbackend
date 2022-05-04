import multer, { FileFilterCallback, MulterError } from "multer";
import { Request } from "express";

const storage = multer.memoryStorage();

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new MulterError("LIMIT_UNEXPECTED_FILE", "image"));
  }
};

const handleMemoryToFile = (nameField: string) =>
  multer({ storage: storage, fileFilter: fileFilter }).single(nameField);

export { handleMemoryToFile };
