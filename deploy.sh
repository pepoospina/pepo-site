#!/bin/bash

# this is where we compress any JS and CSS files
rm -rf stage
mkdir stage

cp -r ./build/* ./stage

bucket="s3://pepo-site"

echo $bucket;

# Add 1yr cache to Assets
aws s3 sync ./stage "$bucket" --acl public-read --delete

rm -rf ./stage
