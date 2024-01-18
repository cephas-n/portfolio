# build stage
FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_APP_API_URL=https://api.cefftech.net

RUN npm run build

# production stage
FROM nginx:stable-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]