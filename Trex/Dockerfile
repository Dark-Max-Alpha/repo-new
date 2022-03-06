FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Dark-Max-Alpha/repo-new /root/repo-new
WORKDIR /root/repo-new/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
