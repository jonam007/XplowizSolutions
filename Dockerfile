FROM  node:20-alpine as builder 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build



FROM node:20-alpine
RUN npm install -g http-server
WORKDIR /app
COPY --from=builder /app/dist .


EXPOSE 80
CMD ["http-server", "-p", "80", "--spa"]