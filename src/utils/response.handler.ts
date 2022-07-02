export class ResponseHandler {
  buildResponse(code: number, message: string, data?: any) {
    return {
      code,
      message,
      data,
    };
  }
}
