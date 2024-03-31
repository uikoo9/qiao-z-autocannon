# qiao-z-autocannon

[qiao-z](https://qiao-z.insistime.com/#/)性能测试代码

## autocannon

使用[autocannon](https://www.npmjs.com/package/autocannon)来压测，

安装：`npm i -g autocannon`

## qiao-z

- 启动：`npm run qz`
- 访问：`http://localhost:9999`
  - res.send：`http://localhost:9999/res-send`
  - res.json：`http://localhost:9999/res-json`
  - res.render：`http://localhost:9999/res-render`
  - res.render(template)：`http://localhost:9999/res-render-template`
- 测试：
  - res.send：`autocannon -p 1 -c 10 -d 10 http://localhost:9999/res-send`
  - res.json：`autocannon -p 1 -c 10 -d 10 http://localhost:9999/res-json`
  - res.render：`autocannon -p 1 -c 10 -d 10 http://localhost:9999/res-render`
  - res.render(template)`autocannon -p 1 -c 10 -d 10 http://localhost:9999/res-render-template`

## express.js

- 启动：`npm run express`
- 访问：`http://localhost:9998`
  - res.send：`http://localhost:9998/res-send`
  - res.json：`http://localhost:9998/res-json`
  - res.render：`http://localhost:9998/res-render`
  - res.render(template)：`http://localhost:9998/res-render-template`
- 测试：
  - res.send：`autocannon -p 1 -c 10 -d 10 http://localhost:9998/res-send`
  - res.json：`autocannon -p 1 -c 10 -d 10 http://localhost:9998/res-json`
  - res.render：`autocannon -p 1 -c 10 -d 10 http://localhost:9998/res-render`
  - res.render(template)`autocannon -p 1 -c 10 -d 10 http://localhost:9998/res-render-template`
