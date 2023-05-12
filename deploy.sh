#!/bin/sh
#!/usr/bin/env fish
ng build --configuration production --aot
firebase deploy
