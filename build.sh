#!/bin/bash -e

for FILE in workflows/* ; do
  echo "Generating workflow from '$(basename ${FILE})'"
  node "build.js" "${FILE}" > ".github/${FILE}"
done
