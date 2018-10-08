FROM debian:9

ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

COPY . /opt/tracim

RUN apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install -y sudo curl wget
RUN cd /opt/tracim && \
    DEBIAN_FRONTEND=noninteractive ./setup_default_backend.sh && \
    DEBIAN_FRONTEND=noninteractive ./install_frontend_dependencies.sh && \
    DEBIAN_FRONTEND=noninteractive ./build_full_frontend.sh
COPY docker/bootstrap.sh /
