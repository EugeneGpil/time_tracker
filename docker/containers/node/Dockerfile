FROM node:22.12-bookworm

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
    echo "export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" >> "/home/app/.bashrc"
