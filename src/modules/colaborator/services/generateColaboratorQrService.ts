import { ApplicationError } from "../../shared/customErrors/ApplicationError";
import QRCode from 'qrcode';


export const generateColaboratorQrService = async (body:{token:string}) => {
  try {
    QRCode.toString(body.token, (err, src) => {
        return src;
    });
  } catch (error: any) {
    throw new ApplicationError(
      error.statusCode,
      error.message,
      error.errorType,
      error.service,
      error.fn
    );
  }
}