export class ApplicationError extends Error {
  errorType: string;
  statusCode: number;
  service: string | undefined;
  fn: string | undefined;

  constructor(
    statusCode: number = 500,
    message: string,
    errorType: string,
    service?: string,
    fn?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;
    this.service = service;
    this.fn = fn;
  }
}
