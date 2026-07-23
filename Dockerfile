# Use the official Node.js Alpine image for a lightweight footprint
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install production dependencies only (ignores devDependencies)
RUN npm ci --only=production

# Copy the rest of your Express application source code
COPY . .

# Expose the port your Express app listens on (e.g., 3000)
EXPOSE 3060

# Set environment variable to production
ENV NODE_ENV=production

# Use the non-root 'node' user provided by the official image for security
USER node

# Command to start your Express application
CMD ["node", "index.js"]