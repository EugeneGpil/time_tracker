FROM nginx:1.27.3-bookworm

COPY ./conf.d /etc/nginx/conf.d

ARG APP_HOST

RUN rm /etc/nginx/conf.d/default.conf && \
    sed -i -e "s#%%DOMAIN%%#${APP_HOST}#" $(find /etc/nginx/conf.d/ -type f) && \
    apt-get update && \
    apt-get install acl -y --no-install-recommends
