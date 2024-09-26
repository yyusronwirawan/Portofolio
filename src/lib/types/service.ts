export type ServiceResponse<T = unknown> = {
  error?: string;
  success?: string;
  data?: T;
};
