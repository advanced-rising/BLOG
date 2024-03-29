FROM node:16

ARG NODE_ENV
ARG APP_NAME
ARG NEXT_PUBLIC_BASE_URL

LABEL name="${APP_NAME}"

RUN mkdir app

WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
COPY ./.next /app/.next

ENV NODE_ENV=${NODE_ENV}

COPY . /app

# RUN yarn build

EXPOSE 3000

CMD [ "npm","run","dev" ]

# docker build . -t {name}
# docker run {name}
# docker run -p sha256 -d