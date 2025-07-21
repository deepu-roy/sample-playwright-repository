FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install && \
    apk add --no-cache chromium firefox-esr && \
    npx playwright install --with-deps chromium firefox webkit

COPY . .

EXPOSE 9323

ENTRYPOINT [ "npm","run", "test" ]
