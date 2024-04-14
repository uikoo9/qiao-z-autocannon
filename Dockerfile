FROM uikoo9/nodejs:0.0.4

WORKDIR /home/qiao-z-autocannon
COPY ./src /home/qiao-z-autocannon

RUN npm config set registry https://mirrors.cloud.tencent.com/npm/
RUN npm i

CMD ["node", "qz.js"]