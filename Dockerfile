# Stage 1: Build the application
FROM node:20-bullseye-slim AS builder

# Install build tools. 
# This guarantees that CMake and Ninja are correctly installed in Linux
# to completely bypass any "bad cmake executable" errors you get locally.
RUN apt-get update && apt-get install -y \
    python3 \
    cmake \
    ninja-build \
    git \
    curl \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Install dependencies (using legacy-peer-deps to avoid strict peer dependency failures)
RUN npm install --legacy-peer-deps

# Build the Web Application (rspack build)
RUN npm run build

# Stage 2: Serve the application using a lightweight web server
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
