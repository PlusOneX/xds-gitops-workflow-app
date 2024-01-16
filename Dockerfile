FROM node:18-alpine

ENV NODE_ENV development
ENV PORT 7071
ENV HOST 0.0.0.0
ENV SERVICE_URL http://localhost:7072

WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app

RUN npm install

EXPOSE 7071

CMD ["node", "app.js"]