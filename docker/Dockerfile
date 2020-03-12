FROM nginx

COPY umu-spp/ /usr/share/nginx/html/umu-spp
RUN rm /etc/nginx/conf.d/default.conf
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
