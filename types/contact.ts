export type Status = "idle" | "success" | "error";

export interface FieldErrors {
  [key: string]: string;
}

export interface ApiResponseSuccess {
  status: "success";
  message: string;
  details: unknown;
}

export interface ApiResponseError {
  status: "error";
  message: string;
  details?: unknown;
}

export type ApiResponse = ApiResponseSuccess | ApiResponseError;