#!/bin/bash

# this is where we compress any JS and CSS files
rm -rf stage
mkdir stage
mkdir -p stage/node_modules/@kor-ui/kor

cp -r ./dist-pages/* ./stage
cp -r ./node_modules/@kor-ui/kor/kor-styles.css ./stage/node_modules/@kor-ui/kor/kor-styles.css

bucket="s3://pepo-site"

echo $bucket;

# GZIP encode every css and js files then rename them to remove the .gz ext
find ./stage/*.js -exec gzip -9 {} \; -exec mv {}.gz {} \;
find ./stage/*.css -exec gzip -9 {} \; -exec mv {}.gz {} \;
find ./stage/*.png -exec gzip -9 {} \; -exec mv {}.gz {} \;
find ./stage/assets/*.jpeg -exec gzip -9 {} \; -exec mv {}.gz {} \;
find ./stage/node_modules/@kor-ui/kor/*.css -exec gzip -9 {} \; -exec mv {}.gz {} \;


# Add 1yr cache to Assets
aws s3 sync ./stage "$bucket" --include "*" --exclude "*.css" --exclude "*.js" --exclude "*.html" --cache-control "max-age=31536000" --acl public-read
# Add 1 year cache to CSS and JS
aws s3 sync ./stage "$bucket" --exclude "*" --include "*.js" --include "*.css" --include "*.png" --content-encoding gzip --cache-control "max-age=31536000" --acl public-read
# Add 2min cache to main html file
aws s3 sync ./stage "$bucket" --exclude "*" --include "*.html" --cache-control "max-age=120" --acl public-read

rm -rf ./stage
