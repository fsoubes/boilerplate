#!/bin/bash

echo Fixing the git!

find .git/objects/ -type f -empty | xargs rm
git fetch -p
git fsck --full
