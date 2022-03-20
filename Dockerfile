FROM beevelop/nodejs-python
LABEL MAINTAINER https://github.com/A0nameless0man/download-webhook

WORKDIR /app

RUN apt-get update \
 && apt-get install -y ffmpeg git\
 && pip3 install --no-cache-dir you-get bilili youtube-dl \
 && apt-get install -y wget --no-install-recommends \
 && git clone https://github.com/A0nameless0man/download-webhook.git ./ \
 && yarn;

EXPOSE 3000
CMD ["npm", "run", "start"]
