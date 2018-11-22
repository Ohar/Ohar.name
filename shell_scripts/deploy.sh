#!/usr/bin/env bash

# Save script directory path
# https://stackoverflow.com/a/24112741/2059884
declare -r PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$PARENT_PATH"

declare -r FOLDER=`node -p 'require("./../config.json")["path"]'`;
declare -r SERVER=`node -p 'require("./../config.json")["server"]'`;
declare -r USERNAME=`node -p 'require("./../config.json")["username"]'`;

declare -r URL=$USERNAME@$SERVER

declare -r FILE_NAME_OLD="old_static_site.zip"
declare -r FILE_NAME_SPA="spa.zip"

declare -r FOLDER_OLD=$FOLDER"/old_static_site"
declare -r FOLDER_SPA=$FOLDER"/spa"

scp ./../dist/$FILE_NAME_OLD $URL:~
scp ./../dist/$FILE_NAME_SPA $URL:~

ssh -tt $URL <<DEPLOY
    echo $FOLDER_OLD
    echo $FOLDER_SPA
    echo $USERNAME
    echo $SERVER

    sudo rm -rf $FOLDER_OLD/*
    sudo rm -rf $FOLDER_SPA/*
    sudo mv ~/$FILE_NAME_OLD $FOLDER_OLD
    sudo mv ~/$FILE_NAME_SPA $FOLDER_SPA

    cd $FOLDER_OLD
    sudo unzip -u $FILE_NAME_OLD
    sudo rm $FILE_NAME_OLD

    cd $FOLDER_SPA
    sudo unzip -u $FILE_NAME_SPA
    sudo rm $FILE_NAME_SPA

    sudo systemctl restart nginx
    echo "Done"
    exit
DEPLOY
