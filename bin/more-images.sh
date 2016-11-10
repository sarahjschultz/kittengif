#! /bin/bash

# To download more cats, adjust the limit param in the giphy querystring and
# the limits in the for loop. ❤️

# @see https://github.com/Giphy/GiphyAPI#search-endpoint
raw=$(curl -s "http://api.giphy.com/v1/gifs/search?q=cute-kitten&limit=301&api_key=dc6zaTOxFJmzC")

# Adjust as necessary.
for i in `seq 101 300`;
do
  url=$(echo $raw | ./jq-osx-amd64 ".data[$i].images.fixed_height.mp4" | sed 's/"//g')
  name=$(printf "%03d" $i)
  echo "grabbing $url..."
  curl -s $url > "../images/$name.mp4"
  echo "done"
done
