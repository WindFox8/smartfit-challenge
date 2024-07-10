FROM node:21 as builder
WORKDIR /app
COPY . .
RUN npm install
# RUN npm install @angular/cli@13.3.11 -g
# RUN ng build
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/smartfit-challenge usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]