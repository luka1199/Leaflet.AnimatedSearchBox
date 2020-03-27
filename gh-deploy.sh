#!/bin/sh
git checkout gh-pages
git merge master
git commit -m "Update gh-pages"
git push
git checkout master