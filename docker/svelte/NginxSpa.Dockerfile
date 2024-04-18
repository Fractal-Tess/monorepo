# Base 
FROM node:20.12.2-alpine3.19 as base

FROM base as pruner

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
COPY . .

# Install enable corepack and install pnpm
RUN corepack enable pnpm

# Prune turborepo
RUN pnpx turbo prune --scope=svelte --docker


# Installing step
FROM base as builder

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

# Change this  to json once got rid of consumet
COPY .gitignore .gitignore
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ .
RUN pnpm turbo run build --filter=svelte

# Runner step
FROM nginx:alpine3.19 as runner

# Copy the nginx configuration
COPY ../docker/svelte/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the nginx folder
COPY --from=builder /app/apps/svelte/dist /usr/share/nginx/html

