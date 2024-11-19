FROM node:18 AS build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Use an Nginx image to serve the application
FROM nginx:alpine AS production-stage

# Copy the build output to Nginx's default public directory
COPY --from=build-stage /app/dist/frontend/browser /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d
# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

