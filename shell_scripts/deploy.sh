#!/usr/bin/env bash

# Save script directory path
# https://stackoverflow.com/a/24112741/2059884
declare -r PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$PARENT_PATH"

declare -r FOLDER=`node -p 'require("./../config.json")["path"]'`;
declare -r SERVER=`node -p 'require("./../config.json")["server"]'`;
declare -r USERNAME=`node -p 'require("./../config.json")["username"]'`;

declare -r URL=$USERNAME@$SERVER

declare -r FILE_NAME="ohar.name.zip"

scp ./../dist/$FILE_NAME $URL:~

ssh -tt $URL <<DEPLOY
    sudo rm -rf $FOLDER/*
    sudo mv ~/$FILE_NAME $FOLDER

    cd $FOLDER
    sudo unzip -u $FILE_NAME
    sudo rm $FILE_NAME

    sudo systemctl restart nginx
    echo "Done"
    exit
DEPLOY
