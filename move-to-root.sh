#!/bin/bash

# Check if my-app directory exists
if [ ! -d "my-app" ]; then
    echo "Error: my-app directory not found"
    exit 1
fi

# Move all contents from my-app to current directory
echo "Moving contents from my-app to root directory..."
mv my-app/* my-app/.* . 2>/dev/null || true

# Remove empty my-app directory
rm -rf my-app

echo "Move completed successfully!" 