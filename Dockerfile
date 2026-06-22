FROM node:20-alpine
RUN apk add --no-cache git
WORKDIR /app
RUN git clone --depth 1 --branch fresh-main \
    https://github.com/Amgedhigazi/SDV.git .
ENV CI=false
ENV NODE_OPTIONS=--max-old-space-size=1536
RUN npm ci
RUN npm run build
RUN npm install express
EXPOSE 3000
CMD ["node", "server.js"]
