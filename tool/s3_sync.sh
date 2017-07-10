#!/bin/bash

#s3cmd --exclude=".git/*" sync --recursive --cf-invalidate --cf-invalidate-default-index --default-mime-type="text/html" --guess-mime-type ~/amberstones.net/yellowButton/web/* s3://yellow-button-web

TOP="/Users/daesubkim/Desktop/ApiWay/Web/apiway-web"
s3cmd sync --exclude=".git/*" --exclude="node_modules/*" --recursive --default-mime-type="text/html" --guess-mime-type $TOP/vue/dist/* s3://apiway.io -c ~/.s3cfg
