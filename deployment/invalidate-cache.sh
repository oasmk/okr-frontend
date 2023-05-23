        
#!/bin/bash

set -e
eval $(sceptre --ignore-dependencies list outputs $1/static-web.yaml --export=envvar)
aws cloudfront create-invalidation --distribution-id $SCEPTRE_DistributionId --paths "/*"