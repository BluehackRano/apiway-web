# ApiWay

> Cloud based API Test Runner

## Build Setup

### Vue

``` bash
# Change directory
cd vue

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

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

### Docker

다음과 같이 레지스트리에 대해 Docker 클라이언트를 인증하는 데 사용할 수 있는 docker login 명령을 조회합니다.
``` bash
aws ecr get-login --region us-west-2
```

이전 단계에서 반환된 docker login 명령을 실행합니다.
``` bash
aws ecr get-login --region us-west-2
```
다음과 같이 레지스트리에 대해 Docker 클라이언트를 인증하는 데 사용할 수 있는 docker login 명령을 조회합니다.
``` bash
docker build -t tower-web-console .
```
빌드가 완료되면 다음과 같이 이미지에 태그를 지정하여 리포지토리에 푸시할 수 있습니다
``` bash
docker tag tower-web-console:latest 539277938309.dkr.ecr.us-west-2.amazonaws.com/tower-web-console:latest
```
다음 명령을 실행하여 이 이미지를 새로 생성한 AWS 리포지토리로 푸시합니다.
``` bash
docker push 539277938309.dkr.ecr.us-west-2.amazonaws.com/tower-web-console:latest
```

