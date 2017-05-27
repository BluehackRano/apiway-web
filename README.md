![logo](https://github.com/ApiWay/apiway-design/blob/master/img/logo.png)

# ApiWay: Web
Web Application for apiway.io

## About ApiWay
TC(Test Case)를 Cloud 상에서 정해진 스케줄에 따라 반복적으로 수행하여 결과를 알려주는 서비스입니다
#### Problem
* 우리가 사용하는 API들은 변경이 자주 일어납니다.
* 이들 변경사항들은 문서화도 잘 되어있지 않을 뿐 더러, Client 개발자에게 즉각적인 공지도 이루어 지지 않습니다.
* 항상, 피해는 Client 개발자들의 몫이 되어버립니다.
* 어제까지 잘 동작하던 앱이, 갑자기 이상 동작을 일으킵니다.  한참을 디버깅 하다 보니 서버측 API의 field 하나가 바뀌었네요.
* 이런 일이 다반사이다 보니, 서버측 API가 정상적인지 확인하는 TC를 만듧니다.
* 하지만, 수시 때때로 서버 API개발자는 변경사항을 만들고, 서버의 이상항 로직은 이상한 데이터를 양산해 냅니다.
* 24시간 PC앞에 앉아서 TC를 돌려 볼 수는 없는 노릇입니다.
#### Solution
* ApiWay가 TC를 자동으로 수행해줍니다.
* Github/Bitbucket에 올려둔 Repository(TC) 주소만 알려주세요.
* 1시간/1일/1주일, 스케줄은 원하는데로 설정하세요.
* 테스트 결과는 설정한 곳(email, slack 등)으로 알려드립니다.(특히, API 개발자에게)

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
#### Job
* [apiway-job](https://github.com/ApiWay/apiway-job)
#### Cloud (Kubernetes)
* [apiway-cloud-orchestration](https://github.com/ApiWay/apiway-cloud-orchestration)
#### Design
* [apiway-design](https://github.com/ApiWay/apiway-design)

### Snapshots
#### Dashboard
![dashboard](https://github.com/ApiWay/apiway-design/blob/master/docs/img/dashboard.png)
#### Projects
![projects](https://github.com/ApiWay/apiway-design/blob/master/docs/img/projects.png)

