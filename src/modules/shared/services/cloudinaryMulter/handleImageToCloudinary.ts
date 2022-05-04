import cloudinary from "cloudinary";
import { ApplicationError } from "../../customErrors/ApplicationError";
import { bufferFormatter } from "./utils/bufferFormatter";

export const uploadImagecloudinaryService = async (
  image: Express.Multer.File
): Promise<{ secure_url: string; public_id: string }> => {
  try {
    const { content } = bufferFormatter(image);
    const { secure_url, public_id } = await cloudinary.v2.uploader.upload(
      content!
    );
    return { secure_url, public_id };
  } catch (error: any) {
    throw new ApplicationError(
      400,
      error.message,
      error.errorType,
      "uploadImageToCloudService",
      error.fn
    );
  }
};

export const destroyImageCloudinaryService = async (url_image: string) => {
  try {
    const urlSplit = url_image.split("/");
    const public_id = urlSplit[urlSplit.length - 1].split(".")[0];
    await cloudinary.v2.uploader.destroy(public_id);
  } catch (error: any) {
    throw new ApplicationError(
      400,
      error.message,
      error.errorType,
      "destroyImageCloudinaryService",
      error.fn
    );
  }
};
