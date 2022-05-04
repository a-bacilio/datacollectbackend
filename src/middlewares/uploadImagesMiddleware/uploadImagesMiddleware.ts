import { ApplicationError } from "../../modules/shared/customErrors/ApplicationError";
import { Response, Request, NextFunction } from "express";
import { MulterError } from "multer";
import { handleMemoryToFile } from "../../modules/shared/services/cloudinaryMulter/handleMemoryToFile";

const uploadImagesMiddleware =
  (nameField: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    handleMemoryToFile(nameField)(req, res, function (err) {
      if (err instanceof MulterError) {
        next();
      } else if (err) {
        next(
          new ApplicationError(
            400,
            err.message,
            "File Upload Error",
            undefined,
            "uploadImageMiddeware"
          )
        );
      }
      next();
    });
  };

export { uploadImagesMiddleware };
