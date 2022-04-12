FROM node:latest

RUN git clone https://github.com/Dark-Max-Alpha/v5-new /root/v5-new
WORKDIR /root/v5-new/
RUN git clone https://github.com/Dark-Max-Alpha/v5-new
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
