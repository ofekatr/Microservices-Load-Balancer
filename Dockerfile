FROM node:12
WORKDIR /home/node/app
COPY nodeapp /home/node/app
RUN npm install
CMD npm run build
CMD npm start