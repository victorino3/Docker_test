FROM node
LABEL maintainer "Victorino"
RUN mkdir app 
RUN npm install -g nodemon
WORKDIR app
COPY . /app
CMD nodemon
