#!/bin/bash

# Set the image and container name
IMAGE_NAME="valorant-info"
CONTAINER_NAME="valorant-info"

# Build the Docker image
echo "Building the Docker image..."
git pull origin master
docker build -t $IMAGE_NAME .

# Stop and remove the existing container, ignoring errors if the container is not running
echo "Stopping the existing container (if running)..."
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

# Run a new container
echo "Running a new container..."
docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME

echo "Deployment completed."
