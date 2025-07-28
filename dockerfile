FROM node:22

WORKDIR /app

# Copy package files
COPY package.json package-lock.json*  ./

RUN  npm install;

COPY . .

COPY .env.local .env.local

RUN npm run build;

EXPOSE 3000


# Start the server
CMD ["npm", "start"]