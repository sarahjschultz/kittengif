#! /bin/bash

# How many cats do you want? ❤️
TOTAL=365

query_limit=$(($TOTAL + 1))

# @see https://github.com/Giphy/GiphyAPI#search-endpoint
raw=$(curl -s "http://api.giphy.com/v1/gifs/search?rating=g&q=cats+kittens&limit=$query_limit&api_key=dc6zaTOxFJmzC")

echo "var kittens = {"
# Adjust as necessary.
for i in `seq 1 $TOTAL`;
do
  name=$(printf "%03d" $i)

  image_data=$(echo $raw | ./jq-osx-amd64 ".data[$i].images.fixed_width")

  mp4_url=$(echo $image_data | ./jq-osx-amd64 ".mp4" | sed 's/"//g')
  webp_url=$(echo $image_data | ./jq-osx-amd64 ".webp" | sed 's/"//g')

  echo "\"$i\": {\"mp4\":\"$mp4_url\", \"webp\":\"$webp_url\"}"

  if [[ $i -lt $TOTAL ]]; then
    echo ","
  fi

done

echo "};"

exit;
