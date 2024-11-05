export function error() {
  throw new Error("error");
}

export class CustomError extends Error {}

export function customError() {
  throw new CustomError();
}
