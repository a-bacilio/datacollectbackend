import DatauriParser from "datauri/parser";
import path from "path";
const parser = new DatauriParser();

const bufferFormatter = (file: Express.Multer.File) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);
export { bufferFormatter };
