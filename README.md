# lambdaHttp

http helpers for serverless http requests.  

## install

```
npm i @yehonadav/lambdaHttp
```

## usage

```typescript
import {createHandler, AsyncHandler, httpOkResponse} from "@yehonadav/lambdahttp"

let handler: AsyncHandler = async (event) => {
  // do something
  // ...
  const responseData = {
    dataint: 3,
    dataintlist: [1,2,3],
  };
  
  return httpOkResponse({
    body: responseData,
  });
};

handler = createHandler(handler);

export { handler };
```

enjoy =)  
