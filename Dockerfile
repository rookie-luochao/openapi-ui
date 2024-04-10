# syntax = docker/dockerfile:experimental
FROM --platform=${BUILDPLATFORM:-linux/amd64,linux/arm64} node:20-buster AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /src
COPY ./ /src

RUN --mount=type=cache,target=/src/node_modules,id=myapp_pnpm_module,sharing=locked \
    --mount=type=cache,target=/pnpm/store,id=pnpm_cache \
        pnpm install

RUN --mount=type=cache,target=/src/node_modules,id=myapp_pnpm_module,sharing=locked \
        pnpm run build

FROM --platform=${BUILDPLATFORM:-linux/amd64,linux/arm64} ghcr.io/rookie-luochao/nginx-runner:latest

COPY --from=builder /src/dist /app