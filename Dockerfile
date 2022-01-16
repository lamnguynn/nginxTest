FROM nginx:1.20.2-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./*.html /usr/share/nginx/html/


