export const unfetch = <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  return fetch(input, init).then((res) =>
    res.ok ? Promise.resolve(res.json()) : Promise.reject()
  );
};
