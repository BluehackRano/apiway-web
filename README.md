![logo](https://github.com/ApiWay/apiway-design/blob/master/img/logo.png)

# ApiWay
Web Application for apiway.io

## Build 
### Vue

``` bash
# Change directory
cd vue

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# localhost 환경에서 github API를 사용시 apiway.io/login에서 Github Authentication을 완료한 후 localstorage에 저장된 token을 아래 파일에 추가해야 함
- ${TOP}/vue/config/local.env.js -
exports.token = {
  github: 'xxxxxxxxxxxx',
  bitbucket: ''
}

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


![ApiWay Tech. Stack](https://github.com/ApiWay/apiway-cli/blob/master/docs/img/apiway_tech_stack.png)


## Related Projects
#### CLI
* [apiway-cli](https://github.com/ApiWay/apiway-cli)
#### API
* [apiway-api](https://github.com/ApiWay/apiway-api)
#### SDK
##### Javascript
* [apiway-sdk-js](https://github.com/ApiWay/apiway-sdk-js)
* [npm: apiway.js](https://www.npmjs.com/package/apiway.js)
#### Cloud (Kubernetes)
* [apiway-cloud-orchestration](https://github.com/ApiWay/apiway-cloud-orchestration)
#### Design
* [apiway-design](https://github.com/ApiWay/apiway-design)

### Snapshots
#### Dashboard
![dashboard](https://github.com/ApiWay/apiway-design/blob/master/docs/img/dashboard.png)
#### Projects
![projects](https://github.com/ApiWay/apiway-design/blob/master/docs/img/projects.png)

