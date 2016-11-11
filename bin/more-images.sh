#! /bin/bash

# How many cats do you want? ❤️
TOTAL=365

query_limit=$(($TOTAL + 1))

# @see https://github.com/Giphy/GiphyAPI#search-endpoint
raw=$(curl -s "http://api.giphy.com/v1/gifs/search?q=cats+kittens&limit=$query_limit&api_key=dc6zaTOxFJmzC")

# Adjust as necessary.
for i in `seq 1 $TOTAL`;
do
  name=$(printf "%03d" $i)

  image_data=$(echo $raw | ./jq-osx-amd64 ".data[$i].images.fixed_height")

  mp4_url=$(echo $image_data | ./jq-osx-amd64 ".mp4" | sed 's/"//g')
  webp_url=$(echo $image_data | ./jq-osx-amd64 ".webp" | sed 's/"//g')

  mp4_dest="../images/$name.mp4"
  if [[ ! -e $mp4_dest ]]; then
    echo "getting cat $name.mp4..."
    curl -s $mp4_url > $mp4_dest
    echo "done"
  else
    echo "cat $name.mp4 exists"
  fi

  webp_dest="../images/$name.webp"
  if [[ ! -e $webp_dest ]]; then
    echo "getting cat $name.webp..."
    curl -s $webp_url > $webp_dest
    echo "done"
  else
    echo "cat $name.webp exists"
  fi

done

exit;
