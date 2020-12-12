#! /bin/bash

# Copy
mkdir -p dist/types/client
mkdir -p dist/types/runtime
cp -r src/types/client/* dist/types/client
cp -r src/types/runtime/* dist/types/runtime