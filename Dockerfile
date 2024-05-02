#
#FROM nginx:latest
#RUN rm /etc/nginx/conf.d/default.conf
#RUN rm -rf /etc/nginx/conf.d/*
#COPY nginx.conf /etc/nginx/conf.d/
#
#COPY ./build /usr/share/nginx/html
#EXPOSE 3000
#
#CMD ["nginx", "-g", "daemon off;"]

FROM node:21
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]

