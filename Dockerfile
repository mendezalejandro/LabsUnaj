FROM nginx as runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/labs-unaj /usr/share/nginx/html
EXPOSE 80