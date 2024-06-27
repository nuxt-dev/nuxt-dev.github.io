# --- download ---

FROM alpine:latest as download

ENV PB_VERSION 0.22.14

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# --- deploy ---

FROM alpine:latest as deploy

RUN apk --no-cache add curl bash tree tzdata

COPY --from=download /pb/ /pb/

EXPOSE 8090

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]