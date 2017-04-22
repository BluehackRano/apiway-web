#!/usr/bin/env bash

REPOSITORY="tower-web-console"
TAG=$1
AWS_CONTAINER_REGISTRY="539277938309.dkr.ecr.us-west-2.amazonaws.com"

docker build -t $REPOSITORY:$TAG .
docker tag $REPOSITORY:$TAG $AWS_CONTAINER_REGISTRY/$REPOSITORY:$TAG
docker push $AWS_CONTAINER_REGISTRY/$REPOSITORY:$TAG
kubectl rolling-update $REPOSITORY --image $AWS_CONTAINER_REGISTRY/$REPOSITORY:$TAG