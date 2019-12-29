FROM node:lts
COPY . home/node/app/
WORKDIR /home/node/app
RUN npm install
EXPOSE 3000
CMD npm run start