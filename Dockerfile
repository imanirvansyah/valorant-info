# Use the official Node.js image as a base
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# -------- Serve Stage --------
# Use a smaller Node.js image for serving the built app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the build files from the previous stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Expose port 3000 to access the app
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]