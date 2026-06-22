# Build React app from GitHub source (avoids local upload issues)
FROM node:20-alpine AS builder
RUN apk add --no-cache git
WORKDIR /app
RUN git clone --depth 1 --branch fresh-main \
    https://github.com/Amgedhigazi/SDV.git .
ENV CI=false
ENV NODE_OPTIONS=--max-old-space-size=1536
RUN npm ci && npm run build

# Lean production image
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package.json ./
RUN npm install express
EXPOSE 3000
CMD ["node", "server.js"]
