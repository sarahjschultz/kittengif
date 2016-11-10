#! /bin/bash

# @see https://github.com/Giphy/GiphyAPI#search-endpoint
raw=$(curl -s "http://api.giphy.com/v1/gifs/search?q=kitten&limit=101&api_key=dc6zaTOxFJmzC")

# Adjust as necessary.
for i in `seq 25 100`;
do
  url=$(echo $raw | ./jq-osx-amd64 ".data[$i].images.fixed_height.url" | sed 's/"//g')
  name=$(printf "%03d" $i)
  echo "grabbing $url..."
  curl -s $url > "../images/$name.gif"
  echo "done"
done
