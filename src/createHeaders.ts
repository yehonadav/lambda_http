export function createHeaders(headers: any) {
  const defaultHeaders = {
    'Access-Control-Allow-Origin': '*',
  };
  const allHeaders = Object.assign({}, defaultHeaders, headers);
  const singleValueHeaders = {};
  const multiValueHeaders = {};
  Object.entries(allHeaders).forEach(([key, value]) => {
    const targetHeaders = Array.isArray(value) ? multiValueHeaders : singleValueHeaders;
    Object.assign(targetHeaders, { [key]: value });
  });

  return {
    headers: singleValueHeaders,
    multiValueHeaders,
  };
}