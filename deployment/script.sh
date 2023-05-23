#!/bin/bash

set -e
if [[ -z "$AWS_ACCESS_KEY_ID" ]]; then
    echo AWS Access Key ID invalid
    exit 1
fi

if [[ -z "$AWS_SECRET_ACCESS_KEY" ]]; then
    echo AWS Secret Access Key invalid
    exit 1
fi

if [[ -z "$AWS_REGION" ]]; then
    echo AWS Region invalid
    exit 1
fi


mkdir ~/.aws
touch ~/.aws/credentials
touch ~/.aws/config

echo "[default]
aws_access_key_id = $AWS_ACCESS_KEY_ID
aws_secret_access_key = $AWS_SECRET_ACCESS_KEY
region = $AWS_REGION" > ~/.aws/credentials

echo "[default]
output = text
region = $AWS_REGION" > ~/.aws/config

sudo apt-get update
sudo apt-get --upgrade "urllib3==1.22" awscli
sudo apt-get install -y python3-pip python3-wheel python3-setuptools
sudo pip3 install wheel sceptre

echo "Deploying the app"
sceptre launch -y $1/static-web.yaml
