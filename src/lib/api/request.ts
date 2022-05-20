/* Types
-------------------------------------------------------------------------*/

interface ApiBaseResponse<ResponseType, ErrorType> {
  status: number;
  ok: boolean;
  json: ResponseType | ErrorType;
}

interface ApiErrorResponse<ResponseType, ErrorType>
  extends ApiBaseResponse<ResponseType, ErrorType> {
  ok: false;
  json: ErrorType;
}

interface ApiOkResponse<ResponseType, ErrorType>
  extends ApiBaseResponse<ResponseType, ErrorType> {
  ok: true;
  json: ResponseType;
}

export type ApiResponse<ResponseType, ErrorType> =
  | ApiOkResponse<ResponseType, ErrorType>
  | ApiErrorResponse<ResponseType, ErrorType>;

interface IBaseErrorType {
  [field: string]: string[];
}

/* Interface
-------------------------------------------------------------------------*/

export function apiFetchRequest(url: string, init?: RequestInit): Promise<Response> {
  return fetch(url, {
    ...init,
  });
}

export function apiFetch<ResponseType, ErrorType = IBaseErrorType>(
  url: string,
  init?: RequestInit,
): Promise<ApiResponse<ResponseType, ErrorType>> {
  return apiFetchRequest(url, init).then((response) => {
    return new Promise((resolve) =>
      response.json().then((json) =>
        resolve({
          status: response.status,
          ok: response.ok,
          json,
        }),
      ),
    );
  });
}
