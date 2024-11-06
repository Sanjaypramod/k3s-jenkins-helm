FROM node:alpine

# Create and set permissions for the application directory
RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

# Copy files and set the correct ownership
COPY --chown=node:node . .

# Switch to non-root user for security
USER node

# Install dependencies
RUN npm install

# Expose the application’s port
EXPOSE 4000

# Default command
CMD ["npm", "start"]

