#!/bin/bash
cd /home/kavia/workspace/code-generation/recipevault-104768-b351b7b9/recipe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

