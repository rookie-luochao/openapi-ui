English · [中文](./README-zh_CN.md)

# openAPI UI
a simpler and more beautiful openapi document than swagger-ui, quickly generate mock params and call api request

### website domain
* CN: [www.openapi-ui.com](https://www.openapi-ui.com)
* US: [docs.openapi-ui.com](https://docs.openapi-ui.com)

### quick start
```bash
// node version >= 18
// download node_modules
pnpm install
# or make install

// start
npm run dev
# or make dev
```

### some script
```bash
// build
npm run build
# or make build

// make docker image
make docker-build

// run docker image
make docker-run

// make docker image and run docker image
make docker-build-run
```

### support data format
* swagger2.json/swagger2.yml
* openapi3.json/openapi3.yml

### how to use
* enter swagger2/openapi3 api gateway URL
* upload swagger2/openapi3 file
* enter swagger2/openapi3 text

### mock request params
* if the schema contains the format field, then use [openapi-sampler](https://github.com/Redocly/openapi-sampler) to mock request params
* if the schema does not contain the format field, then use faker to mock request params

### config
* supports configure request timeout
* supports configure request Authorization

### unable to connect intranet api
* if unable to connect intranet api, you can run this project locally or use docker to deploy this project locally or on the server

### share URL
* in order to keep the URL simple, the sharing URL needs to be generated through the button in the upper right corner of the page

### support multiple api gateway URL
* the caching strategy used is session storage, so you can open multiple pages at the same time

### node version
node >= 18