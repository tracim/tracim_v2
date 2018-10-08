FROM debian:9

ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8

COPY . /opt/tracim

# Install deps
RUN apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install -y sudo curl wget

# Tracim install
# TODO BS 2018-10-08: Add step to reduce final disk size
RUN cd /opt/tracim && \
    DEBIAN_FRONTEND=noninteractive ./setup_default_backend.sh && \
    DEBIAN_FRONTEND=noninteractive ./install_frontend_dependencies.sh && \
    DEBIAN_FRONTEND=noninteractive ./build_full_frontend.sh

# Container structure
RUN mkdir /etc/tracim
COPY docker/bootstrap.sh /
WORKDIR /opt/tracim/backend
VOLUME ["/etc/tracim", "/var/lib/tracim"]
CMD ["/bin/bash", "/bootstrap.sh"]