#!/bin/bash
PROJECT_ID="13183752735399190675"
SCREENS=(
  "588a34289d8440b8985459a058fb8b0e"
  "5f8ed382af7a4d54bf5b6942c4d868bc"
  "76dac723437d4bca8cf6a6ca1ab514d4"
  "f982eeb78d234662bc5ce49fa46f3f88"
  "b35de598c1564db29a59fe830987ddb7"
  "d382e605833048aaa18edc9d922b9144"
)

mkdir -p screens

for SCREEN_ID in "${SCREENS[@]}"; do
  echo "Downloading screen $SCREEN_ID..."
  # Download HTML
  curl -L "http://localhost/${PROJECT_ID}/${SCREEN_ID}/index.html" -o "screens/${SCREEN_ID}.html"
  # Download image
  curl -L "http://localhost/${PROJECT_ID}/${SCREEN_ID}/image.png" -o "screens/${SCREEN_ID}.png"
done
echo "Download complete."
