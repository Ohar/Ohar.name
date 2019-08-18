#!/usr/bin/env bash

# Save script directory path
# https://stackoverflow.com/a/24112741/2059884
declare -r PARENT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$PARENT_PATH"

`node -p 'npx babel ./../src/constants/dnd/dndCreatureList.js -o ./../dndCreatureList-compiled.js'`;
#`node -p 'npx babel ./../src/constants/dnd/dndCreatureList.js -o ./../dndCreatureList-compiled.js'`;
