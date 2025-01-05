FROM debian:bookworm

ENV DEBIAN_FRONTEND=noninteractive

ARG USER_ID
ARG GROUP_ID
RUN echo "Create group app" && \
    groupadd -g ${GROUP_ID} app && \
    \
    echo "Create user app in group app" && \
    useradd -u ${USER_ID} -m app -g app && \
    \
    echo "Create file with bash commands history" && \
    mkdir /commandhistory && \
    touch /commandhistory/.bash_history && \
    chown -R app:app /commandhistory && \
    echo "export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" >> "/home/app/.bashrc" \
    \
    echo "Always run apt-get update before installation" && \
    apt-get update &&\
    \
    echo "Installing curl for file downloading" && \
    apt-get install --no-install-recommends -y curl && \
    \
    echo "Installing ca-certificates for downloading from https" && \
    apt-get install --no-install-recommends -y ca-certificates

USER app
ARG VERSION_NODE
ARG NPM_MIRROR
RUN echo "downloading and installing nvm" && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && \
    \
    echo "installing node, npm" && \
    \
    echo "making nvm command available" && \
    export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \
    . "$NVM_DIR/nvm.sh" && \
    \
    echo "installing node" && \
    nvm install ${VERSION_NODE} && \
    \
    echo "setting up nodejs version" && \
    nvm use ${VERSION_NODE} && \
    \
    echo "adding nvm.sh to .bashrc to run it every login. It set up nodejs version" && \
    echo "source /home/app/.nvm/nvm.sh" >> /home/app/.bashrc && \
    \
    echo "add node to path. Now can use npm" && \
    export PATH="${PATH}:/home/app/.nvm/versions/node/v${VERSION_NODE}/bin" && \
    \
    echo "some settings to prevent connection timeout error" && \
    npm config set registry="${NPM_MIRROR}" && \
    \
    echo "default fetch-retry-maxtimeout=60000" && \
    npm config set fetch-retry-maxtimeout=240000 && \
    \
    echo "default fetch-retry-mintimeout=10000" && \
    npm config set fetch-retry-mintimeout=40000 && \
    \
    echo "default fetch-timeout=300000" && \
    npm config set fetch-timeout=1200000 && \
    \
    echo "default fetch-retries=2" && \
    npm config set fetch-retries=8 && \
    \
    echo "default fetch-retry-factor=10" && \
    npm config set fetch-retry-factor=40 && \
    \
    echo "default maxsockets=15" && \
    npm config set maxsockets=4 && \
    \
    echo "default prefer-offline=false" && \
    npm config set prefer-offline=true && \
    \
    echo "default strict-ssl=true" && \
    npm config set strict-ssl=false && \
    \
    npm config rm proxy && \
    npm config rm https-proxy && \
    \
    echo "installing quasar" && \
    npm i -g @quasar/cli
